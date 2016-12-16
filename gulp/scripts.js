/**
 * Compiles src/js to public/js
 **/

const paths = require('./config.js').paths;
const gulp = require('gulp');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');
const plumber = require('gulp-plumber');
const onError = require('./on-error.js');

// Paths
const watchPath = paths.src_scripts + '/**/*.js';
const destPath = paths.dest_scripts;

gulp.task('scripts', () =>
  gulp.src(watchPath)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(concat('demo.js'))
    .pipe(gulp.dest(destPath))
);

gulp.task('scripts:watch', ['scripts'], () =>
  gulp.watch(watchPath).on('change', () =>
    runSequence('scripts', 'browser-sync-reload')
  )
);
