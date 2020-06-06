// 开发环境配置，webpack.config.dev.js，主要是devServer、API mock
// 相关配置，注重效率，打包速度优化

const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
module.exports = webpackMerge({
}, baseConfig)