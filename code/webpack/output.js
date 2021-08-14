
// 统一扔到块级作用域中，避免污染全局变量
{
  const modules = [
    
  (function(exports, require, module) {
    const inc = require(1).increment;

const a = 1;
console.log(inc(a));
  }),
  (function(exports, require, module) {
    const add = require(2).add;

exports.increment = x => add(x, 1);
  }),
  (function(exports, require, module) {
    exports.add = (...args) => args.reduce((x, y) => x + y, 0);
  })
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

