const http = require('http')
const router = require('.')

// 参数带有，将解析 userId
router.get('/api/users/:userId', (req, res) => {
  res.end(JSON.stringify({
    userId: req.params.userId
  }))
})

// 前缀路由，匹配所有 /v2 开头的路由
router.use('/v2', (req, res) => {
  res.end('hello, v2')
})

const server = http.createServer((req, res) => {
  router.lookup(req, res)
})

server.listen(3000)
