const webpack = require('webpack')
const HtmlWebpackPlugin = require('..');

const compiler = webpack({
  context: __dirname,
  entry: './index.js',
  output: {
    filename: 'main.[contenthash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
})

compiler.run(() => {
  console.log('DONE')
})