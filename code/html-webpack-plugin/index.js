const { Compilation, Compiler } = require('webpack')

// 本 plugin 将实现两个最基本的功能
//
// 1. 处理 Chunks Javascript 注入的问题
// 2. 处理 publicPath 的问题

function getPublicPath (compilation) {
  const compilationHash = compilation.hash

  // outputOptions.publicPath 有可能由一个函数设置，这里通过 webpack API 获取到字符串形式的 publicPath
  let publicPath = compilation.getAssetPath(compilation.outputOptions.publicPath, { hash: compilationHash })

  // 如果 output.publicPath 没有设置，则它的选项为 auto
  if (publicPath === 'auto') {
    publicPath = '/'
  }

  if (publicPath.length && publicPath.substr(-1, 1) !== '/') {
    publicPath += '/'
  }

  return publicPath
}

function html ({ title, scripts }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  ${scripts.map(src => `<script defer src="${src}"></script>`).join('\n  ')}
</head>
<body>
  Hello, World
</body>
</html>
`
}

class HtmlWebpackPlugin {
  constructor(options) {
    this.options = options || {}
  }

  apply(compiler) {
    const webpack = compiler.webpack

    compiler.hooks.thisCompilation.tap('HtmlWebpackPlugin', (compilation) => {
      // compilation 是 webpack 中最重要的对象，文档见 [compilation-object](https://webpack.js.org/api/compilation-object/#compilation-object-methods)

      compilation.hooks.processAssets.tapAsync({
        name: 'HtmlWebpackPlugin',

        // processAssets 处理资源的时机，此阶段为资源已优化后，更多阶段见文档
        // https://webpack.js.org/api/compilation-hooks/#list-of-asset-processing-stages
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE
      }, (compilationAssets, callback) => {
        // compilationAssets 将得到所有生成的资源，如各个 chunk.js、各个 image、css

        // 获取 webpac.output.publicPath 选项，(PS: publicPath 选项有可能是通过函数设置)
        const publicPath = getPublicPath(compilation)

        // 本示例仅仅考虑单个 entryPoint 的情况
        // compilation.entrypoints 可获取入口文件信息
        const entryNames = Array.from(compilation.entrypoints.keys())

        // entryPoint.getFiles() 将获取到该入口的所有资源，并能够保证加载顺序！！！如 runtime-chunk -> main-chunk
        const assets = entryNames.map(entryName => compilation.entrypoints.get(entryName).getFiles()).flat()
        const scripts = assets.map(src => publicPath + src)
        const content = html({ title: this.options.title || 'Demo', scripts })

        // emitAsset 用以生成资源文件，也是最重要的一步
        compilation.emitAsset('index.html', new webpack.sources.RawSource(content))
        callback()
      })
    })
  }
}

module.exports = HtmlWebpackPlugin