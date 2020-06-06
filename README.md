# 1.什么是webpack

**webpack是一种模块化构建工具。**
## 1.1模块化

> 模块化是指解决一个复杂问题时，自顶向下逐层把系统分成若干模块的过程，有
> 有多种属性，分别反映其内部特性（百度百科）。

### 1.1.1模块化规范
1.&ensp;`CommonJs`
2.&ensp;`AMD`
3.&ensp;`ES6 Module`
其他`CMD`、`UMD`等

- **CommonJs**: 是`Nodejs`广泛使用的一套模块化规范，是一种**同步**加载模块依赖的方式；
  - **`require`**：引入一个模块
  - **`exports`**：导出模块内容
  - **`module`**：模块本身
<br />
- **AMD**：是JS模块加载库[RequireJS](https://requirejs.org)提出并且完善的一套模块化规范，AMD是一种**异步**<br />&emsp;加载模块依赖的方式；
  - **id**：模块的id
  - **dependencies**：模块依赖
  - **factory**：模块的工厂函数，即模块的初始化操作函数
  - **require**：引入模块
<br />
- **ES6 Module**：ES6退出的一套模块化规范。
  - **import**：引入模块依赖
  - **export**：模块导出
> UMD，兼容CommonJS和AMD的一套规范。



## 2.npm scripts

在package.json中添加一下代码段，可以使用`npm run build`或者`yarn build`，运行webpack。

```javascript
"scripts": {
  "build": "webpack"
}
```

# 模拟redux的bindActionCreators
```javascript
test = params => (
  ((args)=>{
    console.log('传入的参数', args);
    return (args1) => {
      console.log(args1)
      return new Promise((res, rej) => {
        setTimeout(() => {
        console.log('promise模拟请求的参数',args)
        args1({ type: 'action mock' })
        }, 1000)
      })
    }
  })(params).call(null,
    (action) => {
      console.log('action', action);
      return action
  })
)
```



## 3.webpack-cli

> 常用选项
- **-config**：指定一个webpack配置文件的路径；
- **-mode**：指定打包环境的mode，取值为`development`和`production`，分别对应着开发环境和生产环境；
- **-json**：输出webpack打包的结果，可以用`webpack --json > stats.json`方式将打包结果输出到指定的文件；
- **-progress**：显示webpack打包进度；
- **-watch, -W**：watch模式打包，监控文件变化之后重新开始打包；
- **-color, --colors`/`-no-color, --no-colors**：控制台输出的内容是否开启颜色；
- **-hot**：开启Hot Module Replacement模式，后面会详细介绍；
- **-profile**：会详细的输出每个环节的用时（时间），方便排查打包速度瓶颈；
- **--display-error-details**：打印错误详情



## 2.Webpack 开发环境搭建

1. 安装 ` node.js`
2. 安装 `webpack-cli webpack`

### npm 相关知识

> 设计思想：[语义版本控制（semver）](https://semver.org/lang/zh-CN/)
>
> <font color=red>rc、1.x.x、alpha、beta</font>，这些版本的意义可以在**semver**得到答案
>
> 例如：简单规范 <font color=red>**`主版本号.次版本号.修订号`**</font><font color=dodgerblue>（MAJOR.MINOR.PATCH）</font>
>
> 1.主版本号：当你做了不兼容的 API 修改；
>
> 2.次版本号：做了向下兼容的功能性新增；
>
> 3.修订号：做了向下兼容的问题修正；

##### npm 包的描述文件

`package.json` 包含了包的基本信息，名称、版本号、描述、作者、依赖关系等。

- `name`，项目名称，如果发布到 npmjs.com ，会以这个名称来命名

详细信息可以查看 [package.json 的文档](https://www.npmjs.cn/getting-started/what-is-npm/)

版本号前缀的意义[npm semver range](https://www.npmjs.cn/misc/semver/#ranges)

##### 设置 npm 镜像

一次性使用 `npm [命令] --registry=https://registry.npm.taobao.org`

设置默认 `npm config set registry https://registry.npm.taobao.org`

##### npm 常用命令

- npm set：设置环境变量，例如：`npm set init-author-name 'Your name'`，初始化时使用默认变量；
- npm info：查看包信息；
- npm search：查找 npm 仓库，后跟 字符串 或者 正则表达式；
- npm list：展示当前项目模块，参数 --global 查看全局模块。

> npm 缺点，下载速度慢，node_modules 混乱，yarn 和 pnpm 可以代替它。



## 3.webpack 常见配置

### webpack.config.js 配置文件

遵循 Node.js 的CommonJS 模块规范

- 通过 `require()` 导入文件或使用 Node.js 内置模块
- 通过 `module.exports` 导出配置
- 普通 JavaScript 语法

这个配置文件实际上是一个 Node.js 的模块

### 配置文件支持多种文件

语法，除 js ，支持 ts（TypeScript）、CoffeeScript、JSX 语法，配置项都相同

导出类型，除对象，支持 函数、Promise、多配制数组

常见名词，`entry module chunk loader plugin bundle`

> **入口 `entry`**
>
> 单入口、多入口区别，单入口扩展配置灵活性较低
>
> 单入口配置，可以是字符串或者字符串数组，实际上都只有一个入口，但打包产出有区别
>
> 多入口，使用对象语法，具有较高的灵活性，可配置多页应用、页面模块分离优化

> **输出 `output` **，常用属性：
>
> - path：指定 bundle 存放路劲
> - filename：bundle 的名称
> - publicPath：指定在浏览器中被引用的 URL 地址

只能有一个 output，可以有多个 entry

占位符：`[hash] \ [chunkhash] \ [contenthash] \ [name] \ [id] \ [query] \ [function]`

<font color=red>hash、chunkhash</font> 的长度可以使用 <font color=red>[xxx:length]</font> 默认 length 为 20。或者，指定 `output.hashDigestLength` 在全局配置长度。



## 4.打包分析工具

webpack 插件 **`webpack-bundle-analyzer`**

- **所需插件**

  - [cross-env](https://www.npmjs.com/package/cross-env) 跨系统传递环境变量，无需担心环境变量是否正确设置
  - [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) 用来分析打包结果
  - [webpack-merge](https://www.npmjs.com/package/webpack-merge) 用来合并 webpack 配置文件
  - [stats-webpack-plugin](https://www.npmjs.com/package/stats-webpack-plugin) 可以配置分析打包的效率、产出结果日志

- **使用方式**

  1.安装插件

  首先安装 `cross-env` ，方便环境变量的设置传递，然后在项目中安装 [`webpack-bundle-analyzer`](https://www.npmjs.com/package/webpack-bundle-analyzer) ，创建一个独立的配置文件，比如，`webpack.config.analyzer.js` ，然后编写配置，此处可以使用 [`webpack-merge`](https://www.npmjs.com/package/webpack-merge) 来进行和开发或者生产 webpack 配置的合并。为了更好的体验，可以使用 [`stats-webpack-plugin`](https://www.npmjs.com/package/stats-webpack-plugin)，通过这个插件可以生成打包分析文件（JSON），然后通过 [`webpack-bundle-analyzer`](https://www.npmjs.com/package/webpack-bundle-analyzer) 插件开启可视化分析（需要全局安装该插件）。

  > `yarn add cross-env webpack-bundle-analyzer webpack-merge stats-webpack-plugin -D`
  >
  > `yarn global add webpack-bundle-analyzer`
  >
  > <font color=red>在此处有个问题，通过 yarn 全局安装的依赖不能再命令行直接执行，发现node全局包里面没有，待研究</font>，所以实际全局安装 webpack-bundle-analyzer 的时候使用的是npm，可能是指向问题。

  在 package.json 配置命令：

  ```json
  ...
  "script": {
      ...
      "analyzer": "cross-env NODE_ENV=env webpack --config webpack.config.analyzer.js"
  }
  ```

  在命令行执行：

  ```cmd
  yarn analyzer --env=development(production)
  ```

  以下是 analyzer 的配置文件：

  ```javascript
  // webpack.config.analyzer.js
  const merge = require('webpack-merge')
  const { BundleAnanlyzerPlugin } = require('webpack-bundle-analyzer')
  const StatsPlugin = require('stats-webpack-plugin')
  const webpackConfigDev = require('./webpack.config.dev.js')
  const webpackConfigPro = require('./webpack.config.pro.js')
  
  module.exports = (env, argv) => {
      let envNeededAnalyze = env === 'development' ? webpackConfigDev : webpackConfigPro
      let concateConfig = merge(envNeededAnalyze, {
          plugins: [
              new StatsPlugin('stats.json', {
                chunkModules: true,
                exclude: [/node_modules[\\\/]react/]
              }),
              new BundleAnalyzerPlugin()
          ]
      })
      return concateConfig
  }
  ```

  



