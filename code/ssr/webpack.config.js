const path = require('path')

const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
  mode: isProduction ? 'production' : 'development',
  target: 'web',
  entry: [
    path.resolve(__dirname, './client.js')
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
}