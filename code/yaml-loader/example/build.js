const webpack = require('webpack')

const compiler = webpack({
  entry: './users.yaml',
  mode: 'none',
  output: {
    filename: '[name].[contenthash:8].js',
    clean: true
  },
  module: {
    rules: [{
      // webpack 将会自动 require('..') 作为 loader
      use: '..',
      test: /\.yaml$/,
      type: 'json'
    }]
  }
})

compiler.run(() => {
  console.log('DONE')
})