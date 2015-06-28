var gulp = require('gulp');
var config = require('../config').script;
var shell = require('gulp-shell');
var changed = require('gulp-changed');
var browserSync  = require('browser-sync');

// instead of bundling, move all the js dependencies to build folder
// this is much faster than bundling every time
gulp.task('copy-config', function() {
    return gulp.src('./config.js')
        .pipe(gulp.dest('./build/'));
});
gulp.task('copy-packages', function() {
    return gulp.src('./jspm_packages/**/')
        .pipe(changed('./build/jspm_packages'))
        .pipe(gulp.dest('./build/jspm_packages'));
});
gulp.task('copy-js', function() {
    return gulp.src('./src/js/**')
        .pipe(gulp.dest('./build/js'));
});
gulp.task('bundle-dev', ['copy-packages', 'copy-js', 'copy-config'], function() {
    browserSync.reload();
});

// bundle JS into a single file
// gulp.task('bundle-dev', function() {
//     return gulp.src('')
//         .pipe(shell(config.bundle.dev))
//         .pipe(browserSync.reload({stream:true}));
// });

// bundle JS and minify
gulp.task('bundle-production', function() {
    return gulp.src('')
        .pipe(shell(config.bundle.prod));
});