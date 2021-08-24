# WIP: 如何实现一个打包器

> 已实现功能：
> 1. 打包 Commonjs
> 1. 打包 Module (TODO)

+ `webpack` 打包后的文件长什么样子

## 代码

``` bash
$ node example.js > output.js

$ node output.js
2
```

## 本次待打包文件

### 01. example.js

```javascript
const inc = require('./increment').increment;
const a = 1;
inc(a); // 2
```

### 02. increment.js

```javascript
const add = require('./math').add;
exports.increment = function(val) {
  return add(val, 1);
};
```

### 03. math.js

```javascript
exports.add = function() {
    var sum = 0, i = 0, args = arguments, l = args.length;
    while (i < l) {
        sum += args[i++];
    }
    return sum;
};
```

### 04. hello.js

``` js
module.exports = 'hello, world'
```

## 打包后骨架代码与解析

![webpack5 打包后文件](https://cdn.jsdelivr.net/gh/shfshanyue/assets@master/src/image.ayrao1zd6ko.png)

为了显示方便并便于理解，这里直接展示为最简化代码，把用于隔离作用域的所有 IIFE 都给去掉。

``` js
const modules = []

const moduleCache = {}
function webpackRequire (moduleId) {}

webpackRequire(0)
```

## `modules`

在 CommonJS 中，模块外有一层包装函数，可见 [The module wrapper](https://nodejs.org/api/modules.html#modules_the_module_wrapper)

``` js
(function(exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
});
```

在前端中没有文件系统，自然也不需要 `__filename` 与 `__dirname`。以下是 `webpack` 中打包后的包裹函数，与 CommonJS 参数一致但位置不同。

``` js
const module1 = function (module, __unused_webpack_exports, __webpack_require__) {
  const add = __webpack__require__(2).add;
  exports.increment = function(val) {
    return add(val, 1);
  };
}
```

而这里的 `modules` 就是 `webpack` 即将打包的所有模块

``` js
const modules = [
  entry,    //=> index.js
  module1,  //=> increment.js
  module2   //=> math.js
]
```

### 确定依赖关系树

+ `index.js` -> 1
  + `increment.js` -> 2
    + `math.js`    -> 3
  + `hello.js`     -> 4

对于以下依赖树，由于 JS 执行查找模块为深度优先搜索遍历，对所有模块构造一个以深度优先的树。

+ entry  -> 1
  + A    -> 2
    + B  -> 3
    + C  -> 4
  + D    -> 5
  + E    -> 6
  + F    -> 7

### 依赖关系树的构建

**如何遍历所有的 require，确认模块依赖树？**

## `webpackRequire`

``` js
function __webpack_require__(moduleId) {
  // Check if module is in cache
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  // Create a new module (and put it into the cache)
  var module = __webpack_module_cache__[moduleId] = {
    // no module.id needed
    // no module.loaded needed
    exports: {}
  };

  // Execute the module function
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  // Return the exports of the module
  return module.exports;
}
```

``` js
function webpackRequire (moduleId) {
  const cacheModule = moduleCache[moduleId]
  if (cacheModule) {
    return cacheModule.exports
  }
  const targetModule = { exports: {} }
  modules[moduleId](targetModule.exports, webpackRequire, targetModule)
  cacheModule[moduleId]
  return targetModule.exports
}
```

