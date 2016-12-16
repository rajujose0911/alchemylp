/**
 * Serve site
 **/

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('serve', (cb) =>
  runSequence(['compile', 'browser-sync', 'watch'], cb)
);
