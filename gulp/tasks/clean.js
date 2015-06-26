var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config');

// Empty the build dir.
gulp.task('clean', function () {
    return gulp.src(config.production.dest, {read: false})
        .pipe(clean());
});