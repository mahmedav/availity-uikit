var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config');
var gulpif = require('gulp-if');
var using = require('gulp-using');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('concat:lib', function() {
  gulp.src(config.lib.src)
    .pipe(gulpif(config.args.verbose, using({prefix:'Task [concat:js] using'})))
    .pipe(concat(config.lib.name))
    .pipe(gulp.dest(config.lib.dest))
    .pipe(reload({ stream:true }));
});