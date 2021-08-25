# WIP: express

## 关于 express 

1. 重路由的中间件设计。在 `express` 中所有中间件都会通过 `path-to-regexp` 去匹配路由正则，造成一定的性能下降
1. querystring 中间件。在 express 中，每次请求都会解析 qs，造成一定的性能下降 (在 koa 中为按需解析)
1. 无 Context 的设计
1. `res.send` 直接扔回数据，无 `ctx.body` 灵活
1. 源码难以理解，无 koa 代码清晰
1. 还有一点仁者见仁，express 默认集成了许多中间件，如 static


## express 的中间件设计

``` js
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

app.get('/api',
  (req, res, next) => {
    // 路由中间件 A
    console.log('Route Level Middleware: C')
  },
  (req, res, next) => {
    // 路由中间件 A
    console.log('Route Level Middleware: D')
  }
)
```

在 `express` 中可把中间件分为应用级中间件与路由级中间。然而所有中间件均需要通过 `path-to-regexp` 对路由进行正则匹配，且**源码中对洋葱模型实现了两遍**

在 `express` 中，使用数据结构 `Layer` 维护中间件，而使用 `stack` 维护中间件列表。所有的中间件都挂载在 `Router.prototype.stack` 或者 `Route.prototype.stack` 下

+ app.router.stack: 执行所有应用级的中间件(即 `app.use` 注册的中间件)，而中间件以路由正则的方式确认是否匹配。
+ app.router.stack[0].route.stack: 找到所匹配到的应用级路由中间件，(即 `app.get` 所注册的中间件)，并执行该中间件的所有路由中间件。

以下是上述代码关于中间件的伪代码数据结构:

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
      handleRequest: 'dispatch: 内部实现',
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