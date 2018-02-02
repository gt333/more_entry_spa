var path = require('path')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
const vuxLoader = require('vux-loader');

var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var entries = utils.getMultiEntry('./src/'+config.moduleName+'/**/*.js') // 获得入口js文件
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
// console.log(process.env.NODE_ENV,config.dev.assetsPublicPath)
let webpackConfig = {
  // context: path.resolve(__dirname, '../'),
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@component': resolve('src/components'),
      '@directives':resolve('src/directives'),
      '@view':resolve('src/module'),
      '@store':resolve('src/store'),
      '@router':resolve('src/router'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff?|svg?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}

module.exports = webpackConfig
// module.exports = vuxLoader.merge(webpackConfig, {
//   plugins: ['progress-bar', 'duplicate-style']
// })
