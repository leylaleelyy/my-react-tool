const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const HTMLPlugin = require('html-webpack-plugin')

//在json里配置
const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge.merge(baseConfig, {
  //应用入口
  entry: {
    app: path.join(__dirname, "../src/app.js")
  },
  output: {
    //哈希值，命中缓存
    filename: '[name].[hash].js',
  },

  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, "../src/index.html")
    })
  ]
})

//localhost:8888
if (isDev) {
  config.mode = "development"
  config.output.publicPath = "/public/"
  config.entry = {
    //客户端热更新所需
    app: ['react-hot-loader/patch', path.join(__dirname, "../src/app.js")]
  }
  config.devServer = {
    //本地，localhost，ip，127.0.0.1都可
    host: 'localhost',
    port: '8888',
    //在dist目录下启动
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    //在浏览器显示错误信息
    overlay: {
      errors: true
    },
    //访问静态路径加了public
    publicPath: '/public/',
    //指定index，映射到dist，404则返回这个html
    historyApiFallback: {
      index: "/public/index.html"
    }
    //如果启动失败了，则删除dist
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config