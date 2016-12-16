/**
* Compiles SCSS to CSS
**/

const paths = require('./config.js').paths;
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const runSequence = require('run-sequence');
const plumber = require('gulp-plumber');
const onError = require('./on-error.js');

// Paths
const watchPath = paths.src_styles + '/**/*.scss';
const destPath = paths.dest_styles;

gulp.task('styles', () =>
  gulp.src([watchPath])
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass({ errLogToConsole: true }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(destPath))
);

gulp.task('styles:watch', ['styles'], () =>
  gulp.watch(watchPath).on('change', () =>
    runSequence('styles', 'browser-sync-reload')
  )
);
