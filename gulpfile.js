var gulp  = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    es2015 = require("babel-preset-es2015");

gulp.task('js', function() {
  return gulp.src('js/**/*.js')
  .pipe(babel({
  			presets: ['es2015']
  		}))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
  gulp.watch('js/**/*.js', ['js']);
});

gulp.task('default', ['watch', 'js']);
