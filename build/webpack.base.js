const path = require('path')
module.exports = {
  mode: "production",
  output: {
    path: path.join(__dirname, '../dist'),
    //静态资源引用时的路径，区分url是否为静态资源，配置路由更方便
    publicPath: './',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      //预处理
      enforce: 'pre',
      test: /.(js|jsx)$/,
      loader: "eslint-loader",
      exclude: [
        path.resolve(__dirname, "../node_modules")
      ]
    }, {
      test: /.jsx$/,
      loader: 'babel-loader'
    }, {
      test: /.js$/,
      loader: 'babel-loader',
      exclude: [
        path.join(__dirname, '../node_modules')
      ]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  }
}