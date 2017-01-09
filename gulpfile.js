var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('default', () => {
  return gulp.src(['./test.js'])
      .pipe(sourcemaps.init())      
      .pipe(concat("bundle.js"))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./"));
});