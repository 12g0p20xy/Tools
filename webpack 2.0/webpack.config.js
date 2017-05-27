var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  // 生成 Source Maps
  devtool: 'cheap-module-eval-source-map',

  // 入口文件路径
  entry: './src/app.js',

  // 出口文件路径
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([ 'css-loader' ])
      },
      {
        test: /\.less$/i,
        use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader?limit=8192&name=./img/[hash].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
    ]
  },

  plugins: [

    // 压缩代码
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
        },
      except: ['$super', '$', 'exports', 'require'] // 排除关键字
    }),

    // 自动输出 html 模板
    new HtmlWebpackPlugin({
      title: '测试',
      filename: 'index.html',
      template: 'index.ejs'
    }),

    // 合并所有的 css 文件提取出 style.css
    new ExtractTextPlugin('style.css')

  ],

  devServer: {
    contentBase:  __dirname + '/dist', // 本地服务器所加载的页面所在的目录
    open : true, // 自动打开页面
    port: 8089, // 本地服务端口配置，默认8080
    historyApiFallback: true, // 不跳转
    inline: true // 实时刷新
  }

}