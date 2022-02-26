// loader 文档见: https://webpack.js.org/api/loaders/
// 官方 json-loader 可见 https://github.com/webpack-contrib/json-loader，尽管目前已内置
//
// 使用 loader 写一个 json-loader，最能理解 webpack 中 loader 的作用

module.exports = function (source) {
  let json = typeof source === 'string' ? source : JSON.stringify(source)
  json = {
    __user: 'shanyue',
    ...JSON.parse(json)
  }

  return `module.exports = ${JSON.stringify(json)}`
}