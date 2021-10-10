const webpack = require('webpack')
const HtmlWebpackPlugin = require('..');

const compiler = webpack({
  entry: './index.js',
  output: {
    filename: '[name].[contenthash:8].js',
    clean: true
  },
  optimization: {
    runtimeChunk: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '山月的主页'
    })
  ],
})

compiler.run(() => {
  console.log('DONE')
})