var gulp = require('gulp');
var config = require('../config').markup;
var browserSync = require('browser-sync');
var useref = require('gulp-useref');

gulp.task('markup', function() {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html-build', function() {
    return gulp.src(config.src)
        .pipe(useref())
        .pipe(gulp.dest(config.dest));
});