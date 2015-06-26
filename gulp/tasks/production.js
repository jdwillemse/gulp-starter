var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('production', ['clean'], function(){
  // This runs only if the karma tests pass
  gulp.start(['markup', 'fonts', 'images', 'minify-css', 'bundle-production']);
});
