/**
 * Compiles JS to dist
 **/

const paths = require('./config.js').paths;
const gulp = require('gulp');
const runSequence = require('run-sequence');
const iconfont = require('gulp-iconfont');
const iconfontCSS = require('gulp-iconfont-css');
const plumber = require('gulp-plumber');
const onError = require('./on-error.js');

// Paths
const watchPath = paths.src_icons + '/**/*.svg';
const targetPath = '../../../src/scss/components/icon/_icon-fonts.scss';
const fontPath = '../../fonts/icon-fonts/';
const destPath = paths.dest_iconFonts;
const imagesDestPath = paths.dest_icons;

gulp.task('icon-fonts', ['icon-fonts:copy-to-images'], function() {
  return gulp.src([watchPath])
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(iconfontCSS({
      fontName: 'icons',
      targetPath: targetPath,
      fontPath: fontPath
    }))
    .pipe(iconfont({
      fontName: 'icons', // required
      appendCodepoints: true, // recommended option
      normalize: true,
      formats: ['svg', 'ttf', 'eot', 'woff']
    }))
    .on('codepoints', function(codepoints, options) {
      // CSS templating, e.g.
      console.log(codepoints, options);
    })
    .pipe(gulp.dest(destPath));
});

gulp.task('icon-fonts:copy-to-images', () =>
  gulp.src([watchPath]).pipe(gulp.dest(imagesDestPath))
);

gulp.task('icon-fonts:watch', ['icon-fonts'], () =>
  gulp.watch(watchPath).on('change', () =>
    runSequence('icon-fonts', 'styles', 'browser-sync-reload')
  )
);
