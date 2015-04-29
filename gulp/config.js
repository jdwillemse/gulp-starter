var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  sass: {
    src: src + "/sass/**/*.{sass,scss}",
    dest: dest,
    settings: {
      imagePath: 'img' // Used by the image-url helper
    }
  },
  images: {
    src: src + "/img/**",
    dest: dest + "/img"
  },
  markup: {
    src: src + "/htdocs/**",
    dest: dest
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
    //   entries: src + '/js/global.coffee',
    //   dest: dest,
    //   outputName: 'global.js',
    //   // Additional file extentions to make optional
    //   extensions: ['.hbs'],
    //   // list of modules to make require-able externally
    //   require: ['jquery', 'backbone/node_modules/underscore']
    //   // See https://github.com/greypants/gulp-starter/issues/87 for note about
    //   // why this is 'backbone/node_modules/underscore' and not 'underscore'
    // }, {
      entries: src + '/js/page.js',
      dest: dest,
      outputName: 'page.js',
      // list of externally available modules to exclude from the bundle
      external: ['jquery']
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
