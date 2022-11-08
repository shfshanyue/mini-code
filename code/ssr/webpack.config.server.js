const path = require('path')

module.exports = {
  mode: 'none',
  target: 'node',
  entry: [
    path.resolve(__dirname, './server.js')
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'server.js',
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