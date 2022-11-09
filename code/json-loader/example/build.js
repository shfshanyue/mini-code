const webpack = require('webpack')

const compiler = webpack({
  entry: './index.js',
  mode: 'none',
  output: {
    filename: '[name].[contenthash:8].js',
    clean: true
  },
  module: {
    rules: [{
      // webpack 将会自动 require('..') 做为 loader
      use: '..',
      // 为了避免与内置的 json-loader 冲突，因此此处命名为 json3
      test: /\.json3$/,
    }]
  }
})

compiler.run(() => {
  console.log('DONE')
})