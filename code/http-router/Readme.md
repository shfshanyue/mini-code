# [WIP]如何实现一个最小版 HTTP Server Router

> 仓库：[mini-http-router](https://github.com/shfshanyue/mini-code/tree/master/code/http-router/)

大家好，我是山月。

实现一个最简的服务端路由，仅需十五行代码。

欲知如何，请往下看。

## 山月的代码实现

代码置于 [shfshanyue/mini-code:code/express](https://github.com/shfshanyue/mini-code/blob/master/code/express/index.js)

可直接读源码，基本每一行都有注释。

使用 `npm run example` 或者 `node example` 可运行示例代码

``` bash
$ npm run example
```

## 目标与示例

1. 可定义路由函数
2. 可定义路由参数

``` js
const http = require('http')
const router = require('.')

router.get('/api/users/:userId', (req, res) => {
  res.end(JSON.stringify({
    userId: req.params.userId
  }))
})

const server = http.createServer((req, res) => {
  router.lookup(req, res)
})

server.listen(3000)
```

## 源码