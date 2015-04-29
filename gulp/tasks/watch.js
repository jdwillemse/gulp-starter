var gulp     = require('gulp');
var watch    = require('gulp-watch');
var config   = require('../config');

gulp.task('watch', ['browserSync'], function() {
  watch(config.images.src, function() { gulp.start('images'); });
  watch(config.sass.src, function() { gulp.start('sass'); });
  watch(config.markup.src, function() { gulp.start('markup'); });
  watch(config.fonts.src, function() { gulp.start('fonts'); });
});