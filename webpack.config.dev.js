// 开发环境配置，webpack.config.dev.js，主要是devServer、API mock
// 相关配置，注重效率，打包速度优化
const fs = require('fs')
const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const vendorConfig = require('./webpack.config.vendor.js')
const webpack = require('webpack')
const { DllReferencePlugin } = webpack

module.exports = () => new Promise((resolve, reject) => {
  let hasManifest = fs.existsSync('./dist/react.manifest.json')
  let config = () => webpackMerge({
    devtool: 'source-map',
    plugins: [
      // 告诉 webpack 使用了哪些动态链接库
      new DllReferencePlugin({
        // 描述 react 动态链接库的文件内容
        manifest: require('./dist/react.manifest.json')
      }),
    ]
  }, baseConfig)
  if (!hasManifest) {
    webpack(vendorConfig, (err, stats) => {
      if (err || stats.hasErrors()) {
        let errInfo = stats.toJson()
        console.log('创建DLL错误', err, errInfo.errors)
        return fs.readdir('./dist', (err, files) => {
          if (err) {
            console.log(err)
            return
          } else {
            return files.map(v =>
              new Promise((resolve, reject) => {
                fs.unlink(path.join(__dirname, 'dist', v), err => {
                  if(err){
                    console.error(err)
                    reject(`删除${v}失败`)
                  } else {
                    resolve(`删除${v}成功`)
                    console.log(`删除${v}成功`)
                  }
                })
              }).catch(err => {
                reject(err)
              })
            )
          }
        })
      }
      resolve(config())
    })
  } else {
    resolve(config())
  }
})