# 流行框架与库的源码分析与最简实现

大家好，我是山月，这是我新开的一个坑：[手写源码最小实现](https://github.com/shfshanyue/mini-code)，**每一行代码都有注释**。

当我们在深入学习一个框架或者库时，为了了解它的思想及设计思路，也为了更好地使用和避免无意的 Bug，源码研究是最好的方法。

对于 `koa` 与 `vdom` 这种极为简单，而应用却很广泛的框架/库，莫不如是。为了验证是否已足够了解它，可以实现一个仅具备核心功能的迷你的库。正所谓，麻雀虽小，五脏俱全。

对于源码，我将尽可能注释每一行代码，并以文章讲述原理与实现过程。目前已实现列表为:

+ [mini-koa](https://github.com/shfshanyue/mini-code/tree/master/code/koa)
+ [mini-http-router](https://github.com/shfshanyue/mini-code/tree/master/code/http-router)
+ [mini-express](https://github.com/shfshanyue/mini-code/tree/master/code/express)
+ [mini-webpack (WIP)](https://github.com/shfshanyue/mini-code/tree/master/code/webpack)
+ [mini-vdom (WIP)](https://github.com/shfshanyue/mini-code/tree/master/code/vdom)

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

## TODO

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
