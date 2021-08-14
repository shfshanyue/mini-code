const fs = require('fs')
const path = require('path')
const { parse } = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default

let moduleId = 0
function buildModule (filename) {
  filename = path.resolve(__dirname, filename)
  const code = fs.readFileSync(filename, 'utf8')
  const ast = parse(code, {
    sourceType: 'module'
  })
  const deps = []
  const currentModuleId = moduleId
  traverse(ast, {
    enter({ node }) {
      if (node.type === 'CallExpression' && node.callee.name === 'require') {
        const argument = node.arguments[0]
        if (argument.type === 'StringLiteral') {
          moduleId++;
          const nextFilename = path.join(path.dirname(filename), argument.value)
          argument.value = moduleId
          // deps.push(module)
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

function createModuleWrapper (code) {
  return `
  (function(exports, require, module) {
    ${code}
  })`
}

function createBundleTemplate (entry) {
  const modules = buildModuleQueue(entry)
  return `
// 统一扔到块级作用域中，避免污染全局变量
{
  const modules = [
    ${modules.map(m => createModuleWrapper(m.code, moduleMapping))}
  ]  

  const cacheModules = {}
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

  webpackRequire(0)
}
`
}

function bundle (entry) {
  return createBundleTemplate(entry)
}

console.log(bundle('./example/index.js'))
