/**
 * Browser Sync setup and tasks
 **/

const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('browser-sync', ['nodemon'], () =>
  browserSync.init({
    proxy: 'localhost:3000', // local node app address
    port: 5000, // use *different* port than above
    notify: true
  })
);

gulp.task('browser-sync-reload', () => browserSync.reload());
