let gulp = require('gulp')
let babel = require('gulp-babel')
let cssnano = require('gulp-cssnano')
let imagemin = require('gulp-imagemin')
let rename = require('gulp-rename')
let sass = require('gulp-sass')
let uglify = require('gulp-uglify')

// 发布任务将es6转为es5
gulp.task('babel',()=>{
  gulp.src('./src/js/es6/*.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(gulp.dest('./src/js/es5'))
})

// 将es5压缩并且改名为.min.js
gulp.task('uglify',()=>{
  gulp.src('./src/js/es5/*.js')
  .pipe(uglify())
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./dist/js'))
})

// 将scss转为css并压缩
gulp.task('sass',()=>{
  gulp.src('./src/sass/*.scss')
  .pipe(sass({ outputStyle: "expanded" }))
  // .pipe(cssnano())
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./dist/css'))
})

// 压缩 home_img
gulp.task('home_img',()=>{
  gulp.src('./src/img/home/*.*')
  .pipe(imagemin())
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./dist/img/home/img'))
})

// 压缩 list_img
gulp.task('list_img',()=>{
  gulp.src('./src/img/list/*.*')
  .pipe(imagemin())
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./dist/img/home'))
})

// 压缩 particulars_img
gulp.task('particulars_img',()=>{
  gulp.src('./src/img/particulars/*.*')
  .pipe(imagemin())
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./dist/img/particulars'))
})

// 压缩 login_img
gulp.task('login_img',()=>{
  gulp.src('./src/img/login/*.*')
  .pipe(imagemin())
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./dist/img/login'))
})

// 压缩 register_img
gulp.task('register_img',()=>{
  gulp.src('./src/img/register/*.*')
  .pipe(imagemin())
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./dist/img/register'))
})

// 压缩 cart_img
gulp.task('cart_img',()=>{
  gulp.src('./src/img/cart/*.*')
  .pipe(imagemin())
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('./dist/img/cart'))
})

//发布任务将添加监听
gulp.task('default',()=>{
  // es5转es6
  gulp.watch('./src/js/es6/*.js',['babel']);
  // es5压缩
  gulp.watch('./src/js/es5/*.js',['uglify'])
  //css压缩
  gulp.watch('./src/sass/*.scss',['sass'])
  
})
