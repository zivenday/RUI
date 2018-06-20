/* 编译压缩组件recharger.js
 * @Author: zhongw@corp.21cn.com 
 * @Date: 2018-06-12 15:01:31 
 * @Last Modified by: zhongw@corp.21cn.com
 * @Last Modified time: 2018-06-12 17:03:23
 */
const path = require('path');
const config = require('./webpack.build.conf');
const isMinify = process.argv.indexOf('-p') !== -1;
delete config.serve;

module.exports = Object.assign(config, {
  mode: 'production',
  entry: {
    'recharger': './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'recharger',
    libraryTarget: 'umd',
    filename: isMinify ? '[name].min.js' : '[name].js',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  performance: false,
  optimization: {
    minimize: isMinify
  }
});