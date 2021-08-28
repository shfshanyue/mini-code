# 如何实现一个最小版 express

> 仓库：[mini-express](https://github.com/shfshanyue/mini-code/tree/master/code/express/)

大家好，我是山月。

`express` 是 Node 中下载量最多的服务端框架，虽然大多归源于 `webpack` 的依赖。今天手写一个迷你版的 `express`，对其内部实现一探究竟。

## 山月的代码实现

代码置于 [shfshanyue/mini-code:code/express](https://github.com/shfshanyue/mini-code/blob/master/code/express/index.js)

可直接读源码，基本每一行都有注释。

使用 `npm run example` 或者 `node example` 可运行示例代码

``` bash
$ npm run example
```

## 关于 express 的个人看法

1. 重路由的中间件设计。在 `express` 中所有中间件都会通过 `path-to-regexp` 去匹配路由正则，造成一定的性能下降 (较为有限)。
1. `querystring` 默认中间件。在 express 中，每次请求都内置中间件解析 qs，造成一定的性能下降 (在 koa 中为按需解析)。
1. 无 Context 的设计。express 把数据存储在 `req` 中，当然也可自定义 `req.context` 用以存储数据。
1. `res.send` 直接扔回数据，无 `ctx.body` 灵活。
1. 源码较难理解，且语法过旧，无 koa 代码清晰。
1. `express` 默认集成了许多中间件，如 static。

## express 的中间件设计

在 `express` 中可把中间件分为应用级中间件与路由级中间。

``` js
// 应用级中间件 A、B
app.use('/api',
  (req, res, next) => {
    // 应用中间件 A
    console.log('Application Level Middleware: A')
  },
  (req, res, next) => {
    // 应用中间件 B
    console.log('Application Level Middleware: B')
  }
)

// 使用 app.get 注册了一个应用级中间件(路由)，且该中间件由路由级中间件 C、D 组成
app.get('/api',
  (req, res, next) => {
    // 路由中间件 C
    console.log('Route Level Middleware: C')
  },
  (req, res, next) => {
    // 路由中间件 D
    console.log('Route Level Middleware: D')
  }
)
```

在 `express` 中，使用数据结构 `Layer` 维护中间件，而使用 `stack` 维护中间件列表。

所有的中间件都挂载在 `Router.prototype.stack` 或者 `Route.prototype.stack` 下，数据结构如下。

+ app.router.stack: 所有的应用级中间件(即 `app.use` 注册的中间件)。
+ app.router.stack[0].route.stack: 某一应用级中间件的所有路由级中间件 (即 `app.get` 所注册的中间件)。

以下是上述代码关于 `express` 中间件的伪代码数据结构:

``` js
const app = {
  stack: [
    Layer({
      path: '/api',
      handleRequest: 'A 的中间件处理函数'
    }),
    Layer({
      path: '/api',
      handleRequest: 'B 的中间件处理函数'
    }),
    Layer({
      path: '/api',
      handleRequest: 'dispatch: 用以执行该中间件下的所有路由级中间件',
      // 对于 app.get 注册的中间件 (应用级路由中间件)，将会带有 route 属性，用以存储该中间件的所有路由级别中间件
      route: Route({
        path: '/api',
        stack: [
          Layer({
            path: '/',
            handleRequest: 'C 的中间件处理函数'
          }),
          Layer({
            path: '/',
            handleRequest: 'D 的中间件处理函数'
          })
        ]
      })
    })
  ]
}
```

根据以上伪代码，梳理一下在 `express` 中匹配中间件的流程:

1. 注册应用级中间件，配置 handleRquest 与 path，并根据 `path` 生成 `regexp`，如 `/api/users/:id` 生成 `/^\/api\/users(?:\/([^\/#\?]+?))[\/#\?]?$/i`
2. 请求来临时，遍历中间件数组，根据中间件的 `regexp` 匹配请求路径，得到第一个中间件
3. 第一个中间件中，若有 next 则回到第二步，找到下一个中间件
4. 遍历结束

## Application 的实现

在 `Application` 层只需要实现一个功能

+ 抽象并封装 HTTP handleRequest

``` js
class Application {
  constructor () {
    this._router = new Router()
  }

  // 在 listen 中处理请求并监听端口号，与 koa 一致，或者说基本所有服务端框架都是这么做的
  listen (...args) {
    // 创建服务，this.handle 为入口函数，在源码中，express app 本身即为入口函数
    const server = http.createServer(this.handle.bind(this))
    server.listen(...args)
  }

  handle (req, res) {
    const router = this._router
    router.handle(req, res)
  }

  // 注册应用级中间件，收集所有的应用级中间至 this._router.stack 中，后将实现洋葱模型
  use (path, ...fns) {
  }

  // 处理 http 的各种 verb，如 get、post、
  // 注册匿名应用级中间件
  get (path, ...fns) {
  }
}
```

## 中间件的抽象: Layer

1. 中间件的抽象
1. 中间件的匹配

中间件要完成几个功能:

1. 如何确定匹配
1. 如何处理请求

基于此设计以下数据结构

``` js
Layer({
  path,
  re,
  handle,
  options
})
```

其中，正则用以匹配请求路径，根据 `path` 生成。那如何获取到路径中定义的参数呢？用捕获组。

此时祭出神器 `path-to-regexp`，路径转化为正则。无论 `Express`、`Koa` 等服务端框架，还是 `React`、`Vue` 等客户端框架的路由部分，它对备受青睐。

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

有了正则，关于匹配中间件的逻辑水到渠成，代码如下

``` js

// 对中间件的一层抽象
class Layer {
  //
  // 当注册路由 app.use('/users/:id', () => {}) 时，其中以下两个想想为 path 和 handle
  // path: /users/:id
  // handle: () => {}
  constructor (path, handle, options) {
    this.path = path
    this.handle = handle
    this.options = options
    this.keys = []
    // 根据 path，生政正则表达式
    this.re = pathToRegexp(path, this.keys, options)
  }

  // 查看请求路径是否匹配该中间件，如果匹配，则返回匹配的 parmas
  match (url) {
    const matchRoute = regexpToFunction(this.re, this.keys, { decode: decodeURIComponent })
    return matchRoute(url)
  }
}
```

## 中间件的收集

`app.use` 及 `app.get` 用以收集中间件，较为简单，代码如下:

``` js
class Application {
  // 注册应用级中间件，收集所有的应用级中间至 this._router.stack 中，后将实现洋葱模型
  use (path, ...fns) {
    this._router.use(path, ...fns)
  }

  // 处理 http 的各种 verb，如 get、post、
  // 注册匿名应用级中间件
  get (path, ...fns) {
    const route = this._router.route(path)
    // 对于该应用级中间件所涉及到的所有路由级中间件，在 Route.prototype.get 中进行处理
    route.get(...fns)
  }
}

class Router {
  constructor () {
    // 收集所有应用级中间件
    this.stack = []
  }

  // 应用级中间件洋葱模型的实现
  handle (req, res) {
  }

  // 
  // app.use('/users/', fn1, fn2, fn3)
  // 此处路径在 express 中可省略，则默认为所有路径，为了更好地理解源码，此处不作省略
  use (path, ...fns) {
    for (const fn of fns) {
      const layer = new Layer(path, fn)
      this.stack.push(layer)
    }
  }

  // 注册应用级路由中间件，是一个匿名中间件，维护一系列关于该路径相关的路由级别中间件，
  route (path) {
    const route = new Route(path)
    // 该匿名中间件的 handleRequest 函数为将应用级中间挂载下的所有路由中间件串联处理
    // 对于路由级中间件，完全匹配，即 /api 将仅仅匹配 /api
    const layer = new Layer(path, route.dispatch.bind(route), { end: true }) 
    layer.route = route
    this.stack.push(layer)
    return route
  }
}
```

其中，关于路由级中间件则由 `Route.prototype.stack` 专门负责收集，多个路由级中间件由 `dispatch` 函数组成一个应用中间件，这中间是一个洋葱模型，接下来讲到。

## 中间件与洋葱模型

洋葱模型实现起来也较为简单，使用 `next` 连接起所有匹配的中间件，按需执行。

``` js
function handle (req, res) {
  const stack = this.stack
  let index = 0

  // 调用下一个应用级中间件
  const next = () => {
    let layer
    let match

    while (!match && index < this.stack.length) {
      layer = stack[index++]
      // 查看请求路径是否匹配该中间件，如果匹配，则返回匹配的 parmas
      match = layer.match(req.url)
    }
    // 遍历中间件，如果无一路径匹配，则状态码为 404
    if (!match) {
      res.status = 404
      res.end('NOT FOUND SHANYUE')
      return
    }
    req.params = match.params
    // 处理中间件的函数，如果中间件中调用了 next()，则往下走下一个中间件
    layer.handle(req, res, next)
  }
  next()
}
```

相较而言，路由级中间件洋葱模型的实现简单很多

``` js
function dispatch (req, res, done) {
  let index = 0
  const stack = this.stack
  const next = () => {
    const layer = stack[index++]

    // 如果最后一个
    if (!layer) { done() }
    layer.handle(req, res, next)
  }
  next()
}
```
## 结语

完。

记得吃早饭。
