const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const pug = require('gulp-pug');

// GULP SASS
gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

// GULP CONCAT
gulp.task('scripts', function(){
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

// DISPLAY: HTML
gulp.task('displays', function buildHTML() {
  return gulp.src('src/display-html/*.pug')
  .pipe(pug({}))
  .pipe(gulp.dest('public/displays'));
});

// DISPLAY: JS
gulp.task('displayjs', function(){
  gulp.src('src/display-js/*.js')
    .pipe(gulp.dest('public/displays/js'));
});

gulp.task('watch', function(){
  gulp.watch('src/sass/*.scss',['sass']);
  gulp.watch('src/js/*.js',['scripts']);
  gulp.watch('src/display-html/*.pug',['displays']);
  gulp.watch('src/display-js/*.js',['displayjs']);
});
