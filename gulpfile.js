const gulp = require('gulp');
const webServer = require('gulp-webserver');

gulp.task('default', () => {
  gulp.src('.').pipe(webServer())
});