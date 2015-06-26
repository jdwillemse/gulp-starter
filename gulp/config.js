var dest = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  script: {
    src: src + '/js/**/*.js',
    dest: dest + '/*.js',
    bundle: {
      dev: "jspm bundle-sfx src/js/app build/app.js",
      prod: "jspm bundle-sfx src/js/app build/app.js --minify --skip-source-maps"
    }
  },
  css: {
    src: src + "/sass/**/*.{sass,scss}",
    minifySrc: dest + "/*.css",
    dest: dest,
    settings: {
      imagePath: 'img' // Used by the image-url helper
    }
  },
  images: {
    src: src + "/img/**",
    dest: dest + "/img"
  },
  fonts: {
    src: src + "/fonts/**",
    dest: dest + "/fonts"
  },
  markup: {
    src: src + "/views/**",
    dest: dest
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
