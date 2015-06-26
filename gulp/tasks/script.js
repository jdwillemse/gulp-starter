var gulp = require('gulp');
var config = require('../config').script;
var shell = require('gulp-shell');
var browserSync  = require('browser-sync');

// bundle JS into a single file
gulp.task('bundle-dev', function() {
    return gulp.src('')
        .pipe(shell(config.bundle.dev))
        .pipe(browserSync.reload({stream:true}));
});

// bundle JS and minify
gulp.task('bundle-production', function() {
    return gulp.src('')
        .pipe(shell(config.bundle.prod));
});