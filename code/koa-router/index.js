const { match } = require("path-to-regexp")

const router = {
  get(path, requestListener) {
    const fn = match(path, { decode: decodeURIComponent })
    this.routes.push({
      route: fn,
      handle: requestListener
    })
  },
  routes: [],
  routes(req, res) {
    let handles = []
    for (const route of this.routes) {
      const match = route.route(req.url)
      if (match) {
        handles.push(route.handle)
      }
    }
    for (const handle of handles) {
      handle(req, res)
    }
  }
}

module.exports = router
