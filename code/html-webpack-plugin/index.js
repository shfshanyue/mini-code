class HtmlWebpackPlugin {
  constructor (options) {
    this.userOptions = options
  }

  apply (compiler) {
    compiler.hooks.thisCompilation.tap('HtmlWebpackPlugin', (compilation) => {
      compilation.hooks.processAssets.tapAsync({
        name: 'HtmlWebpackPlugin',
        stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE
      }, (compilationAssets, callback) => {

      })
    })
  }
}

module.exports = HtmlWebpackPlugin