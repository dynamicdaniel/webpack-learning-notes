// 继承webpack.config.prod.js，然后增加 webpack-bundle-analyzer 插件配置
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// 分析每个模块打包的时间，并输出分析报告json
const StatsPlugin = require('stats-webpack-plugin')
// 合并配置文件的插件
const webpackMerge = require('webpack-merge')
// 不同环境下的配置文件
const webpackProdConfig = require('./webpack.config.prod')
const webpackDevConfig = require('./webpack.config.dev')

const analyzerConfig = {
  profile: true,
  plugins: [
    new StatsPlugin('statics.json', {
      colors: true,
      chunkModules: false,
      exclude: [/node_modules/]
    }),
    new BundleAnalyzerPlugin({
      // static: html file、json、disabled、default: server
      analyzerMode: 'static' // 输出 html 文件
    })
  ]
}

module.exports = (env, args) => {
  let config = env === 'production' ? webpackProdConfig : webpackDevConfig
  let mergeConfig = webpackMerge(config, analyzerConfig)
  console.log('____________mergeConfig_____________', mergeConfig)
  return mergeConfig
}