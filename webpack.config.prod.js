// 生产环境配置，线上最优打包配置
// 相关配置：split Chunks、压缩资源、CDN 路径配置（output）等
// terser-webpack-plugin 强制去除一些调试信息
const webpack = require('webpack')
const { CommonsChunkPlugin } = webpack.optimize
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
    })
  ]
}, baseConfig)