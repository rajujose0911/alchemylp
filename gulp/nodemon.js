/**
 * Nodemon edits to server scripts will reload
 **/

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const reload = require('browser-sync').reload;

// initiate nodemon
gulp.task('nodemon', function(cb) {
  let called = false;
  return nodemon({
    script: 'server.js',
    ext: 'ejs',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', function() {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', () => setTimeout(() => reload({ stream: false }), 1000));
});
