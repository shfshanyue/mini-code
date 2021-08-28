# 如何实现一个最小版 Koa

> 仓库：[mini-koa](https://github.com/shfshanyue/mini-code/tree/master/code/koa)

大家好，我是山月。

Koa 的源码通俗易懂，仅仅有四个文件，Koa 的下载量奇高，是最受欢迎的服务端框架之一。Koa 也是我最推荐阅读源码源码的库或框架。

这里山月使用四十上代码实现一个最简化的 Koa。

## 山月的代码实现

代码置于 [shfshanyue/mini-code:code/koa](https://github.com/shfshanyue/mini-code/blob/master/code/koa/index.js)

可直接读源码，基本每一行都有注释。

使用 `npm run example` 或者 `node example` 可运行示例代码

``` bash
$ npm run example
```

## 演示与示例

以下是一个 koa 核心功能洋葱模型最简化也是最经典的示例：

``` js
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  console.log('Middleware 1 Start')
  await next()
  console.log('Middleware 1 End')
})

app.use(async (ctx, next) => {
  console.log('Middleware 2 Start')
  await next()
  console.log('Middleware 2 End')

  ctx.body = 'hello, world'
})

app.listen(3000)

// 访问任意路由时，将在终端打印以下内容: 
// Middleware 1 Start
// Middleware 2 Start
// Middleware 2 End
// Middleware 1 End
```

在这个最简化的示例中，可以看到有三个清晰的模块，分别如下：

+ Application: 基本服务器框架
+ Context: 服务器框架各种基本数据结构的封装，用以 http 请求解析及响应 (由于 Context 包容万物，所以也被称为垃圾桶...)
+ Middleware: 中间件，也是洋葱模型的核心机制

我们开始逐步实现这三个模块：

## 抛开框架，来写一个原生 server

我们先基于 node 最基本的 `http API` 来启动一个 http 服务，并通过它来实现最简版的 koa，示例如下:

``` js
const http = require('http')

const server = http.createServer((req, res) => {
  res.end('hello, world')
})

server.listen(3000)
```

最简版的 `koa` 示例如下，我把最简版的这个 koa 命名为 `koa-mini`

``` js
const Koa = require('koa-mini')
const app = new Koa()

app.use(async (ctx, next) => {
  console.log('Middleware 1 Start')
  await next()
  console.log('Middleware 1 End')
})

app.use(async (ctx, next) => {
  console.log('Middleware 2 Start')
  await next()
  console.log('Middleware 2 End')

  ctx.body = 'hello, world'
})

app.listen(3000)
```

从上述代码，可以看出有待实现两个核心 API:

1. `new Koa`: 构建 Appliaction
1. `app.use/ctx`: 构建中间件注册函数与 Context

## 构建 Application

首先完成 `Appliacation` 的大体框架：

1. `app.listen`: 处理请求及响应，并且监听端口
1. `app.use`: 中间件注册函数，目前阶段为处理请求并完成响应

只有简单的十几行代码，示例如下：

``` js
const http = require('http')

class Application {
  constructor () {
    this.middleware = null 
  }

  listen (...args) {
    const server = http.createServer(this.middleware)
    server.listen(...args)
  }

  // 这里依旧调用的是原生 http.createServer 的回调函数
  use (middleware) {
    this.middleware = middleware
  }
}
```

调用 `Application` 启动服务的代码如下:

``` js
const app = new Appliacation()

app.use((req, res) => {
  res.end('hello, world')
})

app.listen(3000)
```

由于 `app.use` 的回调函数依然是原生的 `http.crateServer` 回调函数，而在 `koa` 中回调参数是一个 `Context` 对象。

下一步要做的将是构建 `Context` 对象。

## 构建 Context

在 koa 中，`app.use` 的回调参数为一个 `ctx` 对象，而非原生的 `req/res`。因此在这一步要构建一个 `Context` 对象，并使用 `ctx.body` 构建响应：

+ `app.use(ctx => ctx.body = 'hello, world')`: 通过在 `http.createServer` 回调函数中进一步封装 `Context` 实现
+ `Context(req, res)`: 以 `request/response` 数据结构为主体构造 Context 对象

核心代码如下，注意注释部分：

``` js
const http = require('http')

class Application {
  constructor () {}
  use () {}

  listen (...args) {
    const server = http.createServer((req, res) => {
      // 构造 Context 对象
      const ctx = new Context(req, res)

      // 此时处理为与 koa 兼容 Context 的 app.use 函数
      this.middleware(ctx)

      // ctx.body 为响应内容
      ctx.res.end(ctx.body)
    })
    server.listen(...args)
  }
}

// 构造一个 Context 的类
class Context {
  constructor (req, res) {
    this.req = req
    this.res = res
  }
}
```

此时 `koa` 被改造如下，`app.use` 可以正常工作：

``` js
const app = new Application()

app.use(ctx => {
  ctx.body = 'hello, world'
})

app.listen(7000)
```

实现以上的代码都很简单，现在就剩下一个最重要也是最核心的功能：**洋葱模型**

## 洋葱模型及中间件改造

上述工作只有简单的一个中间件，然而在现实中中间件会有很多个，如错误处理，权限校验，路由，日志，限流等等。

因此我们要改造下 `app.middlewares` 使之成为一个数组:

+ `app.middlewares`: 收集中间件回调函数数组，并并使用 `compose` 串联起来

对所有中间件函数通过 `compose` 函数来达到抽象效果，它将对 `Context` 对象作为参数，来接收请求及处理响应：

``` js
// this.middlewares 代表所有中间件
// 通过 compose 抽象
const fn = compose(this.middlewares)
await fn(ctx)

// 当然，也可以写成这种形式，只要带上 ctx 参数
await compose(this.middlewares, ctx)
```

先不论 `compose` 的实现，此时完整代码如下:

``` js
const http = require('http')

class Application {
  constructor () {
    this.middlewares = []
  }

  listen (...args) {
    const server = http.createServer(async (req, res) => {
      const ctx = new Context(req, res)

      // 对中间件回调函数串联，形成洋葱模型
      // 1. 路由解析
      // 2. Body解析
      // 3. 异常处理
      // 4. 统一认证
      // 5. 等等...
      const fn = compose(this.middlewares)
      await fn(ctx)

      ctx.res.end(ctx.body)
    })
    server.listen(...args)
  }

  use (middleware) {
    // 中间件回调函数变为了数组
    this.middlewares.push(middleware)
  }
}
```

接下来，重点完成 `compose` 函数，实现洋葱模型的核心。

## 洋葱模型核心: compose 函数封装

koa 的洋葱模型指每一个中间件都像是洋葱的每一层，当一根针从洋葱中心穿过时，每层都会一进一出穿过两次，且最先穿入的一层最后穿出。

此时该祭出洋葱模型的神图了:

![洋葱模型](https://cdn.jsdelivr.net/gh/shfshanyue/assets@master/src/image.4mum5xlibau0.png)

+ `middleware`: 第一个中间件将会执行
+ `next`: 每个中间件将会通过 next 来执行下一个中间件

我们如何实现所有的中间件的洋葱模型呢?

我们看一看每一个 middleware 的 API 如下

``` js
middleware(ctx, next)
```

而每个中间件中的 `next` 是指执行下一个中间件，我们来把 `next` 函数提取出来，而 `next` 函数中又有 `next`，这应该怎么处理呢？

``` js
const next = () => nextMiddleware(ctx, next)
middleware(ctx, next(0))
```

是了，使用一个递归完成中间件的改造，并把中间件给连接起来，如下所示:

``` js
// dispatch(i) 代表执行第 i 个中间件

const dispatch = (i) => {
  return middlewares[i](ctx, () => dispatch(i+1))
}
dispatch(0)
```

`dispatch(i)` 代表执行第 i 个中间件，而 `next()` 函数将会执行下一个中间件 `dispatch(i+1)`，于是我们使用递归轻松地完成了洋葱模型

此时，再把递归的终止条件补充上: 当最后一个中间件函数执行 `next()` 时，直接返回

``` js
const dispatch = (i) => {
  const middleware = middlewares[i]
  if (i === middlewares.length) {
    return
  }
  return middleware(ctx, () => dispatch(i+1))
}
return dispatch(0)
```

最终的 `compose` 函数代码如下:

``` js
function compose (middlewares) {
  return ctx => {
    const dispatch = (i) => {
      const middleware = middlewares[i]
      if (i === middlewares.length) {
        return
      }
      return middleware(ctx, () => dispatch(i+1))
    }
    return dispatch(0)
  }
}
```

至此，koa 的核心功能洋葱模型已经完成，写个示例来体验一下吧:

``` js
const app = new Application()

app.use(async (ctx, next) => {
  ctx.body = 'hello, one'
  await next()
})

app.use(async (ctx, next) => {
  ctx.body = 'hello, two'
  await next()
})

app.listen(7000)
```

此时还有一个小小的但不影响全局的不足：异常处理，下一步将会完成异常捕获的代码

## 异常处理

如果在你的后端服务中因为某一处报错，而把整个服务给挂掉了怎么办？

我们只需要对中间件执行函数进行一次异常处理即可：

``` js
try {
  const fn = compose(this.middlewares)
  await fn(ctx)
} catch (e) {
  console.error(e)
  ctx.res.statusCode = 500
  ctx.res.write('Internel Server Error')
}
```

然而在日常项目中使用时，我们**必须**在框架层的异常捕捉之前就需要捕捉到它，来做一些异常结构化及异常上报的任务，此时会使用一个异常处理的中间件：

``` js
// 错误处理中间件
app.use(async (ctx, next) => {
  try {
    await next();
  }
  catch (err) {
    // 1. 异常结构化
    // 2. 异常分类
    // 3. 异常级别
    // 4. 异常上报
  }
})
```

## 代码

以下是关于实现最小化 `koa` 的所有代码，并添加了注释。

也可以在此查看源码 [index.js](https://github.com/shfshanyue/mini-code/blob/master/code/koa/index.js)。

``` js
// [http 模块](https://nodejs.org/api/http.html)，构建 Node 框架的核心 API
const http = require('http')

// koa 团队通过额外实现一个库: [koa-compose](https://github.com/koajs/compose)，来完成洋葱模型的核心，尽管 koa-compose 的核心代码只有十几行
// 以下是洋葱模型的核心实现，可参考 [简述 koa 的中间件原理，手写 koa-compose 代码](https://github.com/shfshanyue/Daily-Question/issues/643)
function compose (middlewares) {
  return ctx => {
    const dispatch = (i) => {
      const middleware = middlewares[i]
      if (i === middlewares.length) {
        return
      }
      //
      // app.use((ctx, next) => {})
      // 取出当前中间件，并执行
      // 当在中间件中调用 next() 时，此时将控制权交给下一个中间件，也是洋葱模型的核心
      // 如果中间件未调用 next()，则接下来的中间件将不会执行
      return middleware(ctx, () => dispatch(i+1))
    }
    // 从第一个中间件开始执行
    return dispatch(0)
  }
}


// 在 koa 代码中，使用 Context 对 req/res 进行了封装
// 并把 req/res 中多个属性代理到 Context 中，方便访问
class Context {
  constructor (req, res) {
    this.req = req
    this.res = res
  }
}

class Application {
  constructor () {
    this.middlewares = []
  }

  listen (...args) {
    // 在 listen 中处理请求并监听端口号
    const server = http.createServer(this.callback())
    server.listen(...args)
  }

  // 在 koa 中，app.callback() 将返回 Node HTTP API标准的 handleRequest 函数，方便测试
  callback () {
    return async (req, res) => {
      const ctx = new Context(req, res)

      // 使用 compose 合成所有中间件，在中间件中会做一些
      // 1. 路由解析
      // 2. Body解析
      // 3. 异常处理
      // 4. 统一认证
      // 5. 等等...
      const fn = compose(this.middlewares)

      try {
        await fn(ctx)
      } catch (e) {
        // 最基本的异常处理函数，在实际生产环境中，将由一个专业的异常处理中间件来替代，同时也会做
        // 1. 确认异常级别
        // 2. 异常上报
        // 3. 构造与异常对应的状态码，如 429、422 等
        console.error(e)
        ctx.res.statusCode = 500
        ctx.res.end('Internel Server Error')
      }
      ctx.res.end(ctx.body)
    }
  }

  // 注册中间件，并收集在中间件数组中
  use (middleware) {
    this.middlewares.push(middleware)
  }
}

module.exports = Application

```

## 小结

`koa` 的核心代码特别简单，如果你是一个 Node 工程师，非常建议在业务之余研究一下 koa 的源码，并且自己也实现一个最简版的 koa。
