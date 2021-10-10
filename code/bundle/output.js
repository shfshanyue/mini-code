
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

    (function (exports, require, module) {
      const inc = require(1).increment;

      const hello = require(3);

      const a = 1;
      console.log(inc(a));
      console.log(hello);
    }),
    (function (exports, require, module) {
      const add = require(2).add;

      exports.increment = x => add(x, 1);
    }),
    (function (exports, require, module) {
      exports.add = (...args) => args.reduce((x, y) => x + y, 0);
    }),
    (function (exports, require, module) {
      module.exports = 'hello, world';
    })
  ]

  // 模块缓存，所有模块都仅仅会加载并执行一次
  const cacheModules = {}

  // 2. 加载模块，模拟代码中的 require 函数
  // 打包后，实际上根据模块的 ID 加载，并对 module.exports 进行缓存
  function webpackRequire(moduleId) {
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

