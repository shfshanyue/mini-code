# 流行框架与库的源码分析与最简实现

大家好，我是山月，这是我新开的一个坑：[手写源码最小实现](https://github.com/shfshanyue/mini-code)。

当我们在深入学习一个框架或者库时，为了了解它的思想及设计思路，也为了更好地使用和避免无意的 Bug，源码研究是最好的方法。

对于 `koa` 与 `vdom` 这种极为简单，而应用却很广泛的框架/库，莫不如是。为了验证是否已足够了解它，可以实现一个仅具备核心功能的迷你的库。正所谓，麻雀虽小，五脏俱全。

对于源码，我将尽可能注释每一行代码，并以文章讲述原理与实现过程。目前已实现列表为:

+ [mini-koa](./code/koa/)
+ [mini-http-router](./code/http-router/)
+ [mini-express](./code/express/)
+ [mini-webpack (WIP)](./code/webpack/)
+ [mini-vdom (WIP)](./code/vdom/)

由于目前浏览器对 ESM 已支持良好，对于客户端相关源码使用 ESM 书写，比如 vDOM、React 等。而对于服务端使用 CommonJS 书写，如 koa、express 等。

## 目录结构

源文件置于 `index.js` 中，示例文件置于两个位置:

+ `example.js`
+ `example/`

关于查看及运行示例，请使用命令 `npm run example`

## 与我交流

添加我的微信 `shanyue94`:

+ 拉你进仓库对应的源码交流群，和 5000+ 小伙伴们一起交流源码
+ 山月的原创文章与分享

<img src="https://shanyue.tech/wechat.jpeg" width="200">

## TODO

+ native http server
+ native http client
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
