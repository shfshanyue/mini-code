# Koa Mini

使用 40 行代码实现一个最简化版本的 Koa

## Example

测试用例如下：

``` javascript
// Example
const app = new Application()

app.use(async (ctx, next) => {
  console.log('Middleware 1 Start')
  await next()
  console.log('Middleware 1 End')
})

app.use(async (ctx, next) => {
  console.log('Middleware 2 Start')
  await next()
  console.log('Middleware 2 End')
})

app.listen(7000)

// console.log
// Middleware 1 Start
// Middleware 2 Start
// Middleware 2 End
// Middleware 1 End
```
