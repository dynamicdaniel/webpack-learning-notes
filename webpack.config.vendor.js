const path = require('path')
const webpack = require('webpack')
const { DllPlugin, DllReferencePlugin } = webpack

module.exports = {
  entry: {
    // 将React 相关的模块放到一个单独的动态链接库中
    react: ['react', 'react-dom'],
    // 将项目需要的所有polyfill 放到一个单独的动态链接库中
    polyfill: ['core-js/fn/object/assign', 'core-js/fn/promise', 'whatwg-fetch'],
  },
  output: {
    // 输出的动态链接库的文件名称，[name]代表当前动态链接库的名称，
    // 也就是entry中配置的react 和 polyfill
    filename: '[name].dll.js',
    // 将输出的文件都放到 dist 目录下，
    path: path.resolve(__dirname, 'dist'),
    // 存放动态链接库的全局变量名称，例如对于 react 来说就是 _dll_react
    // 加上_dll，防止全局变量冲突
    library: '_dll_[name]'
    // page 180 - 164
  }
}