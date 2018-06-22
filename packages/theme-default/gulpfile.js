/* eslint-disable semi,spaced-comment,no-undef */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var plumber = require('gulp-plumber');//异常处理，防止出现异常时，退出watch
var postcss = require('gulp-postcss'); //JavaScript 代码来转换CSS 中的样式
var imagemin = require('gulp-imagemin'); // 引入压缩图片插件
// UI设计稿750px宽，那么100vw = 750px，即1vw = 7.5px

var pxtoviewport = require('postcss-px-to-viewport'); // 代码中写px编译后转化成vm
var postcssimport = require('postcss-import')
var postcssurl = require('postcss-url')
var postcssaspectratiomini = require('postcss-aspect-ratio-mini')
var postcsswritesvg = require('postcss-write-svg')
var postcsscssnext = require('postcss-cssnext')
var postcssviewportunits = require('postcss-viewport-units')
var cssnano = require('cssnano')

var concat = require('gulp-concat-dir');//- 多个文件合并为一个；
var mkdirp = require('mkdirp');
var replace = require('gulp-replace');
var clean = require('gulp-clean');


var themedir = '../../theme/', imgdir = '../../theme/img/', iconfontdir = '../../theme/iconfont/'
var dirs = [themedir, imgdir, iconfontdir]


var processors = [
  postcssimport(),
  postcssurl(),
  postcssaspectratiomini(),
  postcsswritesvg({ utf8: false }),
  postcsscssnext(),
  pxtoviewport({
    viewportWidth: 375, //注意：按照100vw=375px 转化
    viewportHeight: 1334,
    unitPrecision: 5,
    viewportUnit: 'vw',
    selectorBlackList: [],
    minPixelValue: 1,
    mediaQuery: false
  }),
  postcssviewportunits(),
  cssnano({
    preset: "advanced",
    autoprefixer: false,
    "postcss-zindex": false
  })
];
gulp.task('sass', ['create'], function () {
  return gulp.src(['./src/scss/components/**/*.scss', './src/scss/index.scss'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(concat({ ext: '.css' }))
    .pipe(replace('assets/', ''))
    .pipe(gulp.dest('../../theme/'))
});

gulp.task('img', ['create'], function () {
  gulp.src('./src/assets/img/*.{png,jpg,gif,ico}')
    .pipe(plumber())
    .pipe(imagemin({
      progressive: true, //Boolean类型 默认:false 无损压缩图片
      optimizationLevel: 5, //number类型 默认:3 取值范围:0-7(优化等级)
      interlced: true, //Boolean类型 默认false 隔行扫描gif进行渲染
      multipass: true //Boolean类型 默认false 多次优化svg直到完全优化
    }))
    .pipe(gulp.dest('../../theme/img')) //输入到build文件夹下的images文件夹下
})
gulp.task('clean:theme', function (cb) {
  return gulp.src('../../theme/*', { read: false })
    .pipe(clean({ force: true }))
});
gulp.task('create', ['clean:theme'], function (cb) {
  dirs.forEach(dir => {
    mkdirp.sync(dir);
  })
  return gulp.src('../../theme/*')
       .pipe(gulp.dest('.'))
})
gulp.task('iconfont', ['create'], function () {
  return gulp.src('./src/assets/iconfont/**')
    .pipe(plumber())
    .pipe(cssmin())
    .pipe(gulp.dest('../../theme/iconfont/'));
});

gulp.task('sass:watch', ['sass', 'img', 'iconfont'], function () {
  gulp.watch('./src/scss/**/*.scss', ['sass', 'img', 'iconfont']);
});

gulp.task('default', ['clean:theme', 'create', 'sass', 'img', 'iconfont', 'sass:watch']);

gulp.task('build', ['clean:theme', 'create', 'sass', 'img', 'iconfont']);