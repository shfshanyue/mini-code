// loader 文档见: https://webpack.js.org/api/loaders/
//
// 使用 loader 写一个 yaml-loader，最能理解 webpack 中 loader 以及 parser(Rule.type) 的作用
const yaml = require('js-yaml');

module.exports = function (source) {
  // 如果 type:json，则最终返回一个 json 数据即可
  return JSON.stringify(yaml.load(source))

  // 如果 type 不填写，即为默认的 type:javascript/auto，则最终返回 cjs/es 数据即可
  // return `module.exports ${JSON.stringify(yaml.load(source))}`
}