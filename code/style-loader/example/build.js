const webpack = require('webpack')
const HtmlWebpackPlugin = require('mini-html-webpack-plugin')

const compiler = webpack({
  entry: './index.js',
  mode: 'none',
  output: {
    filename: 'main.js',
    clean: true
  },
  module: {
    rules: [{
      // webpack 将会自动 require('..') 最为 loader
      use: '..',
      // 为了避免与内置的 json-loader 冲突，因此此处命名为 json3
      test: /\.css$/,
    }]
  },
  plugins:[
    new HtmlWebpackPlugin(),
  ]
})

compiler.run(() => {
  console.log('DONE')
})
