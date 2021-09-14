## 功能

1. 支持粗糙的请求报文解析与相应报文构建并发送
1. `res.end`: 支持正常发送数据
1. `res.write`: 支持 `chunksfer encoding`
1. `keepAlive`

## 演示与示例

### hello, world

``` js
const { createServer } = require('.')

const server = createServer((req, res) => {
  res.end('hello, world')
})

server.listen(8000, () => {
  console.log('Listing 8000')
})
```

### transfer encoding

``` js
const { createServer } = require('.')

const server = createServer((req, res) => {
  res.write('hello, world')
  res.end()
})

server.listen(8000, () => {
  console.log('Listing 8000')
})
```