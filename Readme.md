# 流行框架与库的源码分析与最简实现

大家好，我是山月，这是我新开的一个坑：[手写源码最小实现](https://github.com/shfshanyue/mini-code)。

对于源码，将尽可能注释每一行代码，并以文章讲述原理与实现过程。目前已实现列表为:

+ [mini-koa](./code/koa/)
+ [mini-http-router](./code/http-router/)
+ [mini-express](./code/express/)
+ [mini-webpack](./code/webpack/)

由于目前浏览器对 ESM 已支持良好，对于客户端相关源码使用 ESM 书写，比如 vDOM、React 等。而对于服务端使用 CommonJS 书写，如 koa、express 等。

## 目录结构

源文件置于 `index.js` 中，示例文件置于两个位置:

+ `example.js`
+ `example/`

关于查看及运行示例，请使用命令 `npm run example`

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
