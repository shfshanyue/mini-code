# 如何实现一个最小版 html-webpack-plugin

> 仓库：[mini-html-webpack-plugin](https://github.com/shfshanyue/mini-code/tree/master/code/html-webpack-plugin)

大家好，我是山月。

`html-webpack-plugin` 是使用 webpack 的前端业务代码中必备的插件，用以将 Javascript/CSS 等资源注入 html 中。

这里山月实现一个最简化的 `html-webpack-plugin`。既可以了解 webpack 是如何写一个 plugin，又能够熟悉 webpack 打包的内部流程。

## 山月的代码实现

代码置于 [shfshanyue/mini-code:code/html-webpack-plugin](https://github.com/shfshanyue/mini-code/blob/master/code/html-webpack-plugin/index.js)

可直接读源码，基本每一行都有注释。

使用 `npm run example` 或者 `node example` 可运行示例代码

``` bash
$ npm run example
```

## 源码实现
