// loader 文档见: https://webpack.js.org/api/loaders/
// 官方 json-loader 可见 https://github.com/webpack-contrib/json-loader，尽管目前已内置
//
// 使用 loader 写一个 json-loader，最能理解 webpack 中 loader 的作用

module.exports = function (source) {
  // 为了避免 JSON 有语法错误，所以先 parse/stringify 一遍
  return `module.exports = ${JSON.stringify(JSON.parse(source))}`

  // 写成 ESM 格式也可以，但是 webpack 内部还需要将 esm 转化为 cjs，为了降低复杂度，直接使用 cjs
  // return `export default ${JSON.stringify(JSON.parse(source))}`
}