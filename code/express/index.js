const http = require('http')
const { pathToRegexp, regexpToFunction, match } = require('path-to-regexp')

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
  // 
  // 当一次请求来临时，遍历所有 Layer (即对中间件的抽象)，当符合要求时，所有 Layer 将通过 next 连接按序执行
  handle (req, res) {
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

  // 
  // app.use('/users/', fn1, fn2, fn3)
  // 此处路径在 express 中可省略，则默认为所有路径，为了更好地理解源码，此处不作省略
  use (path, ...fns) {
    for (const fn of fns) {
      // 对于应用级中间件，宽松匹配，前缀匹配，即 /api 将匹配以 /api 开头的所有路径
      const layer = new Layer(path, fn, { end: false, strict: false })
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

class Route {
  constructor (path) {
    this.stack = []
    this.path = path
    this.methods = {}
  }

  // 为应用级中间件注册多个路由级中间件
  get (...fns) {
    this.methods.get = true
    for (const fn of fns) {
      // 路由级中间件的路径可忽略，因路径是否匹配已在该路由级中间件的应用中间件层已做匹配
      const layer = new Layer('/', fn)
      this.stack.push(layer)
    } 
  }

  // 应用级路由中间件的 handleRequest 函数为将应用级中间挂载下的所有路由中间件串联处理
  // 路由级中间件的洋葱模型实现
  dispatch (req, res, done) {
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
}


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

module.exports = () => new Application()
