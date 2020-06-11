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

## 5.优化 Webpack 配置

### 5.1 优化开发体验
- 优化开发体验
  - 优化构建速度
  - 优化使用体验
- 优化输出质量
  - 减少用户感知的加载时间
  - 提升流畅度

####  5.1.1 缩小文件搜索范围
  搜索的过程：
 从入口entry开始，找出文件中的**导入语句**，在递归解析

  > 根据文件中的导入语句，找到对应的文件，然后根据**文件后缀**，使用配置的**loader**处理文件，减少这个过程，可以提高构建速度

  &emsp;提高以上工作的效率，有以下解决方案：

**优化loader配置**
优化命中loader的规则，有三个可选配置，test、include、exclude，可以通过 include 命中需要处理的文件。test 中的正则，以实际情况为准，例如，项目源码中只有 js，则正则不要写成 jsx?，提升正则的性能。例如：

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        include: path.resolve(__dirname, 'src')
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ],
                			cacheDirectory: true
                        }
                    }
                ]
            }
        ]
    }
}
```

**优化 resolve.modules 配置**

resolve.modules 用于查找第三方模块，默认值是 node_modules，查找过程如下：

> 从当前目录的 node_modules 目录下查找，如果没有，去上一级查找，直到全局，根据这个规则，我们可以写明第三方模块的绝对路径，以减少查询

```javascript
module.exports = {
    resolve: {
        modules: path.resolve(__dirname, 'node_modules')
    }
}
```

**优化 resolve.mainFields 配置**

该属于用于配置第三方模块使用哪个**入口文件**，在第三方模块的package.json文件中，有多个描述入口文件的字段，因为不同环境，需要的代码不同，根据target环境的不同，会以此查找可用的入口文件，例如：target = web / webworker 时，mainFields 的值是 ['borwser', 'module', 'main']，target 为其他情况时，值为 ['module', 'main']，为了减少搜索步骤，可以直接将 mainFields 设置为 ['main']，但是只要有一个模块找不到入口，可能会导致构建出的代码无法运行。

**优化 resolve.alias 配置**

一些第三方模块，例如 react ，会有两套代码，一套是直接可运行的最小化代码，一套是带检查警告的代码，还有一套是模块化代码，文件都在lib下面， 入口文件package.json中指定的react.js。我们可以使用可运行的开发代码

```javascript
module.exports = {
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react/dist/react.js')
        }
    }
}
```

**<font color=red>参阅书籍资料是2018年的，react已经不是上面的样子了，这边的配置可以理解学习下，没有实际作用了，_<font color=dodgerblue>而且该方式的优化会影响 tree-shaking （基于es6模块化规范的实现）</font>_</font>**

**优化 resolve.extensions 配置**

这个配置可以使我们在引入文件时不带配置中的文件后缀，如果配置多了，会对查询速度产生可能的影响，原则：

频率高的放前面，没有的别配置，如果没必要可以不要配

**优化 module.noParse 配置**

忽略有导入机制的模块，例如 jquery 、lodash， 可以使用函数或者正则

**使用 DllPlugin**

需要完成的事情：

> - 将网页依赖的基础模块抽离出来，打包到一个个单独的动态链接库中。一个动态链接库中可以包含多个模块。
> - 当需要导入的模块存在于某个动态链接库中时，这个模块不能被再次打包，而是从动态链接库中获取。
> - 页面依赖的所有动态链接库需要被加载。

动态链接库只需要被编译一次，构建过程中，动态链接库中的模块不会被重新编译，所以能大大提升构建速度。

- DllPlugin 插件：打包出动态链接库文件。
- DllReferencePlugin: 用于在配置文件中引入 DllPlugin 插件打包好的动态链接库文件。

> 需要在独立的webpack配置中使用

### 5.2 生产打包优化

> 在 webpack v3 中，涉及到的插件列表：
> - common-chunks-webpack-plugin： 用于拆分代码，使变更频率不大的代码，在浏览器端能长期缓存，而业务代码保持更新。拆分代码后，也容易做进一步的优化。
> - chunk-manifest-webpack-plugin： 通过产出一个json文件，通过chunk ids 映射到最终文件（可能因为内容变化，导致 hash 值变化，但类似 webpack runtime 代码实际是不变的）