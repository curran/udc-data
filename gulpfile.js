var gulp = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('default', ['test', 'docs']);

gulp.task('test', function () {
  gulp.src(['tests/**/*.js'])
    .pipe(mocha({ reporter: 'spec' }));
});
