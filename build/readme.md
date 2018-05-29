# webpack4

## mode: 'development'

process.env.NODE_ENV = 'development'

> 启用

* NamedChunksPlugin
* NamedModulesPlugin

// webpack.development.config.js
module.exports = {

* mode: 'development'

- plugins: [
- new webpack.NamedModulesPlugin(),
- new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
- ]
  }

## mode: 'production

process.env.NODE_ENV = 'production'
启用
FlagDependencyUsagePlugin,
FlagIncludedChunksPlugin,
ModuleConcatenationPlugin,
NoEmitOnErrorsPlugin,
OccurrenceOrderPlugin,
SideEffectsFlagPlugin，
UglifyJsPlugin，

// webpack.production.config.js
module.exports = {

* mode: 'production',

- plugins: [
- new UglifyJsPlugin(/_ ... _/),
- new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
- new webpack.optimize.ModuleConcatenationPlugin(),
- new webpack.NoEmitOnErrorsPlugin()
- ]
  }

## devtool 使用 source maps 进行调试

* devtool 属性，赋值为 source-map 或者 inline-source-map 即可，后者报错信息更加具体，会指示源代码中的具体错误位置，而 source-map 选项无法指示到源代码中的具体位置

![devtool][https://www.webpackjs.com/configuration/devtool/#development]
