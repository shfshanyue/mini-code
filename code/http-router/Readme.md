# 如何实现一个最小版 HTTP Server Router

> 仓库：[mini-http-router](https://github.com/shfshanyue/mini-code/tree/master/code/http-router/)

大家好，我是山月。

实现一个最简的服务端路由，仅需二十行代码。

欲知如何，请往下看。

## 山月的代码实现

代码置于 [shfshanyue/mini-code:code/http-router](https://github.com/shfshanyue/mini-code/blob/master/code/http-router/index.js)

可直接读源码，基本每一行都有注释。

使用 `npm run example` 或者 `node example` 可运行示例代码

``` bash
# 或者直接 node example.js
$ npm run example
```

1. 当访问 `/api/users/10086` 时，将正常响应数据 `{ userId: 10086 }`
1. 当访问 `/v2/randomxxxxx` 时，将相应 `hello, v2`
1. 当访问 `/api/404` 时，将返回 404 状态码

## 目标与示例

1. 可定义路由函数
2. 可定义路由参数

可在 [shfshanyue/mini-code:code/http-router/example.js](https://github.com/shfshanyue/mini-code/blob/master/code/http-router/example.js) 查看完整示例。

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

## 如何匹配路由？

服务端业务根据路由分发不同的业务逻辑处理函数，如下代码，不同的路由不同的处理逻辑:

``` js
const routes = [
  {
    path: '/api',
    method: 'GET',
    handleRequest: (req, res) => {},
  },
  {
    path: '/api/user',
    method: 'GET',
    handleRequest: (req, res) => {}
  },
  {
    path: '/api/book',
    method: 'GET',
    handleRequest: (req, res) => {}
  }
]
```

如何匹配路由，分发到正常的请求处理函数？

以上路径较为简单，可直接匹配字符串

``` js
function lookup (req, res) {
  return routes.find(route => route.path === req.url && route.method === req.method)
}
```

## 携带参数的路由与前缀路由

如果路由表中需要匹配参数呢？

``` js
const routes = [
  {
    path: '/api',
    method: 'GET',
    handleRequest: (req, res) => {}
  },
  {
    path: '/api/user',
    method: 'GET',
    handleRequest: (req, res) => {}
  },
  {
    // 此处路由携带有参数 userId
    path: '/api/users/:userId',
    method: 'GET',
    handleRequest: (req, res) => {}
  }
]
```

+ `/api/users/:userId`: 匹配参数，得到匹配中的 `userId`

正则？这个我熟啊。

把每次注册路由的路径改成正则，进行正则匹配，伪代码如下:

``` js
function lookup (req, res) {
  return routes.find(route => route.re.test(req.url) && route.method === req.method)
}
```

问题来了，如何把路径转化为正则表达式？

此时祭出神器 [path-to-regexp](https://npm.devtool.tech/path-to-regexp)，将路径转化为正则表达式。无论 `Express`、`Koa` 等服务端框架，还是 `React`、`Vue` 等客户端框架的路由部分，都是它的忠实用户。

``` js
const { pathToRegexp } = require('path-to-regexp')

pathToRegexp('/')
//=> /^\/[\/#\?]?$/i

// 可用以匹配前缀路由
p.pathToRegexp('/', [], { end: false })
//=> /^\/(?:[\/#\?](?=[]|$))?/i

// 对于参数，通过捕获组来捕获参数
pathToRegexp('/api/users/:id')
//=> /^\/api\/users(?:\/([^\/#\?]+?))[\/#\?]?$/i
```

路由参数与路由前缀问题迎刃而解。

## 路由的数据结构

使用正则去匹配每次请求的路径，为路由添加一个字段 `re`，根据 `pathToRegexp` 生成正则表达式，此时的数据结构如下所示:

``` js
const routes = [
  {
    path: '/api',
    method: 'GET',
    re: pathToRegexp('/api'),
    handleRequest: (req, res) => {}
  },
]

function lookup (req, res) {
  return routes.find(route => route.re.test(req.url) && route.method === req.method)
}
```

当处理 `/api/users/:userId` 等参数路由时，为路由增加一个方法，用以匹配参数，每次处理请求时，将参数解析并携带到 `req.params` 中。

恰好，`path-to-regexp` 可以使用 `match` 直接解析参数，原理是**使用带有捕获组的正则去匹配请求路径**。

``` js
const { match } = require('path-to-regexp')

// 将解析: /api/users/10086 -> { userId: 10086 }
const matchRoute = match('/api/users/:userId', { decode: decodeURIComponent })

//=> { params: { userId: 10086 } }
matchRoute('/api/users/10086')
```

我们将请求是否能匹配某个路由进行抽象为 `match`，最终路由的数据结构如下所示:

> 在生产环境中，每个路由都会在注册时生成正则表达式，当请求来临时，将根据该正则表达式进行匹配并针对参数路由生成 params

``` js
const routes = [
  {
    path: '/api',
    method: 'GET',
    handleRequest: (req, res) => {}
    match: (path) => {}
  },
  {
    path: '/api/user',
    method: 'GET',
    handleRequest: (req, res) => {}
    match: (path) => {}
  },
  {
    path: '/api/users/:id',
    method: 'GET',
    handleRequest: (req, res) => {}
    match: (path) => {}
  }
]

function lookup (req, res) {
  return routes.find(route => (req.params = route.match(req.url)?.params) && req.method === route.method)
}
```

## 源码

``` js
const { match } = require('path-to-regexp')

const router = {
  routes: [],
  // 注册路由，此时路由为前缀路由，将匹配该字符串的所有前缀与 http method
  use (path, handleRequest, options) {
    // 用以匹配请求路径函数，如果匹配成功则返回匹配成功的参数，否则返回 false
    // user/:id -> users/18 (id=18)
    const matchRoute = match(path, { decode: decodeURIComponent, end: false, ...options })

    // 注册路由，整理数据结构添加入路由数组
    this.routes.push({ match: matchRoute, handleRequest, method: options.method || 'GET' })
  },
  // 注册路由，请求方法为 GET
  get (path, handleRequest) {
    return this.use(path, handleRequest, { end: true })
  },
  // 注册路由，请求方法为 POST
  post (path, handleRequest) {
    return this.use(path, handleRequest, { end: true, method: 'POST' })
  },
  // 入口函数
  lookup (req, res) {
    // 遍历路由，找到匹配路由，并解析路由参数
    const route = this.routes.find(route => (req.params = route.match(req.url)?.params) && req.method === route.method)
    if (route) {
      // 找到路由时，处理该路由的处理逻辑
      route.handleRequest(req, res)
    } else {
      // 如果找不到，返回 404
      res.statusCode = 404
      res.end('NOT FOUND SHANYUE')
    }
  }
}

module.exports = router
```

## 结语

完。

等一下，记得晚上要好好吃饭。
