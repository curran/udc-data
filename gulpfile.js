var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    utils = require('./js/utils.js');

gulp.task('default', ['test']);

gulp.task('test', function () {
  gulp.src(['tests/**/*.js'])
    .pipe(mocha({ reporter: 'spec' }));
});
