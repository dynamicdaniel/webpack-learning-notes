// 生产环境配置，线上最优打包配置
// 相关配置：split Chunks、压缩资源、CDN 路径配置（output）等
// terser-webpack-plugin 强制去除一些调试信息
const webpack = require('webpack')
const { CommonsChunkPlugin } = webpack.optimize // webpack v3, 在v4中已经删除，取而代之的是 splitChunksPlugin
// 模块id映射，防止重新编译后不同的模块id，导致缓存失效, 实际测试后，业务代码变更后，runtime的实际内容的确是没有变化了，但是runtime的hash还是变了,
// 在官方关于CommonsChunkPlugin备注中，提示使用 NamedModulesPlugin 或 HashedModulesPlugin。
const ChunkManifestWebpackPlugin = require('chunk-manifest-webpack-plugin')
// 静态资源映射，如果没有html-webpack-plugin或injection：false时，可以使用它来指定文件（参阅资料后的理解），作用类似
// html-webpack-plugin,资源注入，有文章说和服务端渲染，服务器拿资源有关，文章说明不清楚。rekit 项目中用到了它，但是还不知道为什么用它。
// const WebpackManifestPlugin = require('webpack-manifest-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

module.exports = webpackMerge({
  plugins: [
    new CommonsChunkPlugin({
      name: 'common',
      filename: 'common.[chunkhash:8].js',
      minChunks: function(module, count) {
        return module.resource && (/node_modules/).test(module.resource);
      }
    }),
    new CommonsChunkPlugin({
      name: 'runtime',
      filename: 'runtime.[chunkhash:8].js',
      chunks: ['common']
    }),
    new ChunkManifestWebpackPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true
    }),
  ]
}, baseConfig)