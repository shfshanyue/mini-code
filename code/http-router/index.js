// [path-to-regexp](https://github.com/pillarjs/path-to-regexp)，用以将 `/user/:name` 类参数路由转化为正则表达式
const { match } = require('path-to-regexp')

const router = {
  routes: [],
  // 注册路由，此时路由为前缀路由，将匹配该字符串的所有前缀与 http method
  use (path, handleRequest, options) {
    // 用以匹配请求路径函数，如果匹配成功则返回匹配成功的参数，否则返回 false
    // user/:id -> users/18 (id=18)
    // end:false -> 匹配前缀
    const matchRoute = match(path, { decode: decodeURIComponent, end: false, ...options })

    // 注册路由，整理数据结构添加入路由数组
    this.routes.push({ match: matchRoute, handleRequest, method: options?.method || 'GET' })
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
