/**
* Watches all the files for changes
**/

const gulp = require('gulp');
const tasks = [
  'styles',
  'scripts',
  'icon-fonts'
];

const watches = tasks.map((element) => element + ':watch');

gulp.task('compile', tasks);
gulp.task('watch', watches);
