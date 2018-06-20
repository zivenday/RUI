/*  编译压缩组件配置
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-06-12 15:00:15 
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-12 17:56:42
 */
const path = require('path');
const utils = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  // test: /\.(js|vue)$/,
  // loader: 'eslint-loader',
  // enforce: 'pre',
  // include: [resolve('examples'), resolve('test')],
  // options: {
  //   formatter: require('eslint-friendly-formatter'),
  //   emitWarning: !config.dev.showEslintErrorsInOverlay
  // }
})
module.exports = {
  mode: 'development',
  entry: {
    'recharger-docs': './examples/index.js',
    'recharger-mobile': './examples/mobile.js'
  },
  output: {
    path: path.join(__dirname, '../pack'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'
  },
  stats: {
    modules: false,
    children: false
  },
  serve: {
    open: true,
    host: '0.0.0.0',
    dev: {
      logLevel: 'warn'
    },
    hot: {
      logLevel: 'warn'
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      packages: path.join(__dirname, '../packages'),
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('examples'),
      '@utils': resolve('examples/utils'),
      'utils': resolve('src/utils'),
      'assets': resolve('src/assets'),
      'recharger':resolve('')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('packages'), resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.md/,
        use: [
          'vue-loader',
          'fast-vue-md-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin()
    // new HtmlWebpackPlugin({
    //   chunks: ['recharger-docs'],
    //   template: 'examples/index.tpl',
    //   filename: 'index.html',
    //   inject: true
    // }),
    // new HtmlWebpackPlugin({
    //   chunks: ['recharger-mobile'],
    //   template: 'examples/index.tpl',
    //   filename: 'mobile.html',
    //   inject: true
    // })
  ]
};
