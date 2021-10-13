# 流行框架与库的源码分析与最简实现

大家好，我是山月，这是我新开的一个坑：[手写源码最小实现](https://github.com/shfshanyue/mini-code)，**每一行代码都有注释**。

当我们在深入学习一个框架或者库时，为了了解它的思想及设计思路，也为了更好地使用和避免无意的 Bug，源码研究是最好的方法。

对于 `koa` 与 `vdom` 这种极为简单，而应用却很广泛的框架/库，莫不如是。为了验证是否已足够了解它，可以实现一个仅具备核心功能的迷你的库。正所谓，麻雀虽小，五脏俱全。

对于源码，我将尽可能注释每一行代码，并以文章讲述原理与实现过程。目前已实现列表为:

+ [mini-koa](https://github.com/shfshanyue/mini-code/tree/master/code/koa)
+ [mini-http-router](https://github.com/shfshanyue/mini-code/tree/master/code/http-router)
+ [mini-express](https://github.com/shfshanyue/mini-code/tree/master/code/express)
+ [mini-webpack (有代码，有注释，无文章)](https://github.com/shfshanyue/mini-code/tree/master/code/bundle)
+ [mini-html-webpack-plugin (有代码，有注释，无文章)](https://github.com/shfshanyue/mini-code/tree/master/code/html-webpack-plugin)
+ [mini-json-loader (有代码，有注释，无文章)](https://github.com/shfshanyue/mini-code/tree/master/code/json-loader)
+ [mini-vdom (有代码，有注释，无文章)](https://github.com/shfshanyue/mini-code/tree/master/code/vdom)
+ [mini-native-http-server (有代码，无注释，无文章)](https://github.com/shfshanyue/mini-code/tree/master/code/native-http-server)

由于目前浏览器对 ESM 已支持良好，对于客户端相关源码使用 ESM 书写，比如 vDOM、React 等。而对于服务端使用 CommonJS 书写，如 koa、express 等。

## 运行与目录结构

本项目采用 `monorepo` 进行维护，如果你对它不了解，可直接忽略。

所有的迷你版本实现置于 `code` 文件夹，源文件置于 `index.js` 中，示例文件置于两个位置:

+ `example.js`
+ `example/`

关于查看及运行示例，请使用命令 `npm run example`

``` bash
$ git clone git@github.com:shfshanyue/mini-code.git

# 在 npm v7 中，会对所有 workspace 中的依赖进行安装
$ npm i

# 在 monorepo 中运行某个源码示例
# 或者进入代码目录，再运行示例: cd code/express && npm run example
$ npm run example -w express
```

如果你对 `monorepo` 不了解:

``` bash
$ git clone git@github.com:shfshanyue/mini-code.git

$ npm i
$ cd example/express
$ npm i
$ npm run example
```

## 源码之前

在调试了千万遍源码之后，才能对源码稍微理解，摆在这里的问题是：如何调试源码？

> TODO: 以前三篇文章，随后附上

1. 浏览器中如何调试源码？
1. Node 中如何调试源码？

## 与我交流

添加我的微信 `shanyue94`:

+ 拉你进仓库对应的源码交流群，和 5000+ 小伙伴们一起交流源码
+ 山月的原创文章与分享

<img src="https://shanyue.tech/wechat.jpeg" width="200">

## 推荐阅读源码清单

以下源码按次序，从易到难进行阅读，否则碰到大块头(比如 React)，读不下去，容易怀疑自我，从简单的开始读起，有助于培养自信心

### 偏客户端

+ [ms](https://github.com/vercel/ms): 时间转换器，Vercel 出品，周下载量 8000 万，几乎是 npm 下载量最高的 package 之一，从它看起，让你知道看源码/发包其实也很简单。
+ [github markdown style](): 以为很简单，实际上很难。锻炼 CSS 的最好方法，就是给 markdown 写一个主题。
+ [lru-cache](https://github.com/isaacs/node-lru-cache): LRU Cache，前端及服务端框架中的常用依赖。
+ [tsdx](https://github.com/formium/tsdx): 零配置的 npm 库开发利器，与 CRA 相似，不过它主要面向库开发者而非业务开发者，了解它是如何提供零配置功能，看懂默认配置做了那些优化，并了解它的所有工具链 (prettier、eslint、size、bundleanalyzer、rollup、typescript、storybook)。
+ [create-react-app](https://github.com/facebook/create-react-app): React 最广泛的脚手架，读懂三点。一，如何生成脚手架；二，如何实现 eject；三，了解 cra 的所有重要依赖，读懂默认 webpack 配置。
+ webpack (runtime code): 读懂两点。一、打包 cjs/esm 后的运行时代码；二、打包有 chunk 后的运行时代码。
+ [axios](https://github.com/axios/axios): 请求库，了解它是如何封装源码且如何实现拦截器的。
+ [immer](https://github.com/immerjs/immer): 不可变数据，可提升做深拷贝时的性能，可应用在 React 中。
+ [use-debounce](https://github.com/xnimorz/use-debounce): React 中的一个 debounce hook。减少 React 的渲染次数，可提升性能。
+ [react-virtualized](https://github.com/bvaughn/react-virtualized): React 中的虚拟列表优化，可提升性能。
+ [react-query](https://github.com/tannerlinsley/react-query): 用以请求优化的 react hooks，可提升性能。
+ [react-router](https://github.com/remix-run/react-router): React 最受欢迎的路由库
+ [redux/react-redux](https://github.com/reduxjs/redux): React 最受欢迎的状态库
+ [vite](https://github.com/vitejs/vite): 秒级启动及热更行，可大幅提升开发体验。
+ [vue3](https://github.com/vuejs/vue-next): 最难的放到最后边，读懂 vue3 的性能优化体验在哪些方面。
+ [react](https://github.com/facebook/react): 最难的放到最后边，读懂 Fiber 及其它所提供的性能优化。

### 偏服务端

+ [koa](https://github.com/koajs/koa)
+ [body-parser](https://github.com/stream-utils/raw-body): express 甚至是大部分服务端框架所依赖的用以解析 body 的库
+ [next](https://github.com/vercel/next.js)
+ [ws](https://github.com/websockets/ws): 了解 websocket 是如何构造 Frame 并发送数据的 (在此之前可阅读 node/http 源码)
+ [node](https://github.com/nodejs/node): 最难的放到最后边

## TODO

+ ws
+ native http server
+ native http client
+ lru cache
+ trie router
+ vdom
+ react
+ redux
+ react-query
+ use-debuounce
+ axios
+ vue
+ vite
+ dataloader
+ mustable
+ parser (re/js/css/md)
+ stream pipeline (nodejs)
+ code highlighter
+ babel
+ html-webpack-plugin
