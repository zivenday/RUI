// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    // 处理css中opacity的IE兼容性。
    // require('postcss-opacity'),
    "postcss-px-to-viewport":{
      viewportWidth: 375,
      viewportHeight: 1334,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [
        're-doc','r-doc','simulator','section'
      ],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
}
