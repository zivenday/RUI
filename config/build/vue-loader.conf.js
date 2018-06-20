'use strict'
const utils = require('./utils')
const config = require('../config')
const selectorBlackList= require('../config/pxToviewport').default
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: [
    require('autoprefixer')({
      browsers: [
        '> 1%',
        'last 2 versions',
        'ie >= 9'
      ]
    }),
    require('cssnano')({
      preset: 'default'
    }),
    // 处理flex浏览器兼容性
    // require('postcss-flexibility'),
    // 处理css中rgba颜色代码
    require('postcss-color-rgba-fallback')

  ]
}
