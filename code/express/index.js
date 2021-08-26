const http = require('http')
const { match } = require('path-to-regexp')

class Application {
  constructor () {
    this._router = new Router()
  }

  listen (...args) {
    // 在 listen 中处理请求并监听端口号，与 koa 一致，或者说基本所有服务端框架都是这么做的
    const server = http.createServer(this.handle.bind(this))
    server.listen(...args)
  }

  handle (req, res) {
    const router = this._router
    router.handle(req, res)
  }

  use (path, ...fns) {
    this._router.use(path, ...fns)
  }

  get (path, ...fns) {
    const route = this._router.route(path)
    route.get(...fns)
  }
}

class Router {
  constructor () {
    this.stack = []
  }

  handle (req, res) {
    const stack = this.stack
    let index = 0
    const next = () => {
      let layer
      let match

      while (!match && index < this.stack.length) {
        layer = stack[index++]
        match = layer.match(req.url)
      }
      if (!match) {
        res.status = 404
        res.end('NOT FOUND SHANYUE')
        return
      }
      req.params = match.params
      layer.handle(req, res, next)

      // 如果所有的中间件都不匹配该路由
    }
    next()
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

  route (path) {
    const route = new Route(path)
    const layer = new Layer(path, route.dispatch.bind(route)) 
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

  get (...fns) {
    this.methods.get = true
    for (const fn of fns) {
      const layer = new Layer('/', fn)
      this.stack.push(layer)
    } 
  }

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

class Layer {
  //
  // 当注册路由 app.get('/users/:id', () => {}) 时，其中以下两个想想为 path 和 handle
  // path: /users/:id
  // handle: () => {}
  constructor (path, handle, options) {
    this.path = path
    this.handle = handle
    this.options = options
  }

  match (url) {
    const matchRoute = match(this.path, { decode: decodeURIComponent, ...this.options })
    return matchRoute(url)
  }
}

module.exports = () => new Application()
