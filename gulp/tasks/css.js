var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').css;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});

var gulp      = require('gulp');
var minifyCSS = require('gulp-minify-css');
var size      = require('gulp-filesize');

gulp.task('minify-css', ['sass'], function() {
  return gulp.src(config.minifySrc)
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});