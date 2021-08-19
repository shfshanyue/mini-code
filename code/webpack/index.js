const fs = require('fs')
const path = require('path')

// 负责 code -> ast
const { parse } = require('@babel/parser')
// 负责 ast -> ast
const traverse = require('@babel/traverse').default
// 负责 ast -> code
const generate = require('@babel/generator').default

let moduleId = 0
// 该函数用以解析该文件模块的所有依赖树。对所有目标代码根据 AST 构建为组件树的结构并添加 ID，ID 如果 webpack 一样为深度优先自增。数据结构为:
//
// const rootModule = {
//   id: 0,
//   filename: '/Documents/app/node_modules/hello/index.js',
//   deps: [ moduleA, moduleB ],
//   code: 'const a = 3; module.exports = 3',
// }
//
// 如果组件 A 依赖于组件B和组件C
//
// {
//   id: 0,
//   filename: A,
//   deps: [
//     { id: 1, filename: B, deps: [] },
//     { id: 2, filename: C, deps: [] },
//   ]
// }
function buildModule (filename) {
  // 如果入口位置为相对路径，则根据此时的 __dirname 生成绝对文件路径
  filename = path.resolve(__dirname, filename)

  // 同步读取文件，并使用 utf8 读做字符串
  const code = fs.readFileSync(filename, 'utf8')

  // 使用 babel 解析源码为 AST
  const ast = parse(code, {
    sourceType: 'module'
  })

  const deps = []
  const currentModuleId = moduleId

  traverse(ast, {
    enter({ node }) {
      // 根据 AST 定位到所有的 require 函数，寻找出所有的依赖
      if (node.type === 'CallExpression' && node.callee.name === 'require') {
        const argument = node.arguments[0]

        // 找到依赖的模块名称
        // require('lodash') -> lodash (argument.value)
        if (argument.type === 'StringLiteral') {

          // 深度优先搜索，当寻找到一个依赖时，则 moduleId 自增一
          // 并深度递归进入该模块，解析该模块的模块依赖树
          moduleId++;
          const nextFilename = path.join(path.dirname(filename), argument.value)

          // 如果 lodash 的 moduleId 为 3 的话
          // require('lodash') -> require(3)
          argument.value = moduleId
          deps.push(buildModule(nextFilename))
        }
      }
    }
  })
  return {
    filename,
    deps,
    code: generate(ast).code,
    id: currentModuleId
  }
}

// 把模块依赖由树结构更改为数组结构，方便更快的索引
//
// {
//   id: 0,
//   filename: A,
//   deps: [
//     { id: 1, filename: B, deps: [] },
//     { id: 2, filename: C, deps: [] },
//   ]
// }
// 
// ====> 代码由以上转为以下
// 
// [
//   { id: 0, filename: A }
//   { id: 1, filename: B }
//   { id: 2, filename: C }
// ]
function buildModuleQueue (entry) {
  const moduleTree = buildModule(entry)
  const moduleQueue = []
  buildQueue(moduleTree)
  return moduleQueue

  function buildQueue (module) {
    moduleQueue.push(module)
    if (!module.deps.length) {
      return
    }
    for (const m of module.deps) {
      buildQueue(m)
    }
  }
}

// 构建一个浏览器端中虚假的 Commonjs Wrapper
// 注入 exports、require、module 等全局变量，注意这里的顺序与 CommonJS 保持一致，但与 webpack 不一致，但影响不大
// 在 webpack 中，这里的 code 需要使用 webpack loader 进行处理
function createModuleWrapper (code) {
  return `
  (function(exports, require, module) {
    ${code}
  })`
}

// 根据入口文件进行打包，也是 mini-webpack 的入口函数
function createBundleTemplate (entry) {
  // 如同 webpack 中的 __webpack_modules__，以数组的形式存储项目所有依赖的模块
  const modules = buildModuleQueue(entry)

  // 生成打包的模板，也就是打包的真正过程
  return `
// 统一扔到块级作用域中，避免污染全局变量
// 为了方便，这里使用 {}，而不用 IIFE
//
// 以下代码为打包的三个重要步骤：
// 1. 构建 modules
// 2. 构建 webpackRequire，加载模块，模拟 CommonJS 中的 require
// 3. 运行入口函数
{
  // 1. 构建 modules
  const modules = [
    ${modules.map(m => createModuleWrapper(m.code))}
  ]

  // 模块缓存，所有模块都仅仅会加载并执行一次
  const cacheModules = {}

  // 2. 加载模块，模拟代码中的 require 函数
  // 打包后，实际上根据模块的 ID 加载，并对 module.exports 进行缓存
  function webpackRequire (moduleId) {
    const cachedModule = cacheModules[moduleId]
    if (cachedModule) {
      return cachedModule.exports
    }
    const targetModule = { exports: {} }
    modules[moduleId](targetModule.exports, webpackRequire, targetModule)
    cacheModules[moduleId] = targetModule
    return targetModule.exports
  }

  // 3. 运行入口函数
  webpackRequire(0)
}
`
}

module.exports = createBundleTemplate

