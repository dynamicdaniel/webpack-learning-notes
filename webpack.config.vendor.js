const path = require('path')
const webpack = require('webpack')
const { DllPlugin } = webpack

module.exports = {
  entry: {
    // 将React 相关的模块放到一个单独的动态链接库中
    react: ['react', 'react-dom'],
    // 将项目需要的所有polyfill 放到一个单独的动态链接库中
    // polyfill: ['core-js/fn/object/assign', 'core-js/fn/promise', 'whatwg-fetch'],
  },
  output: {
    // 输出的动态链接库的文件名称，[name]代表当前动态链接库的名称，
    // 也就是entry中配置的react 和 polyfill
    filename: '[name].dll.js',
    // 将输出的文件都放到 dist 目录下，
    path: path.resolve(__dirname, 'dist'),
    // 存放动态链接库的全局变量名称，例如对于 react 来说就是 _dll_react
    // 加上_dll，防止全局变量冲突
    library: '_dll_[name]',
    // page 180 - 164
  },
  plugins: [
    // 接入 DllPlugin
    new DllPlugin({
      // 动态链接库的全局变量名称，需要和 output.library 中的保持一致
      // 该字段的值也就是输出的 manifest.json 文件中 name 字段的值
      // 例如在 react.manifest.json 中就有 'name': '_dll_react'
      name: '_dll_[name]',
      // 描述动态链接库的 manifest.json 文件输出时的名称
      path: path.join(__dirname, 'dist', '[name].manifest.json')
    })
  ]
}