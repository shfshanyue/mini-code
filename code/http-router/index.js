const { match } = require('path-to-regexp')

const router = {
  routes: [],
  get (path, handleRequest) {
    const matchRoute = match(path, { decode: decodeURIComponent })
    this.routes.push({ match: matchRoute, handleRequest })
  },
  lookup (req, res) {
    const route = this.routes.find(route => req.params = route.match(req.url)?.params)
    if (route) {
      route.handleRequest(req, res)
    } else {
      res.statusCode = 404
      res.end('NOT FOUND SHANYUE')
    }
  }
}

module.exports = router
