const gulp = require('gulp');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
const config = require('./config');
const merge = require('merge-stream');

const reload = browserSync.reload;


/* 
 / IMG
*/
gulp.task('img', function () {
  return gulp.src(config.src.img)
    .pipe(gulp.dest(config.dest.img))
});

/* 
 / PHP
*/
gulp.task('php', function () {
  return compilePhp();
});

/* STYLES
 /
*/
gulp.task('styles', function () {
  return compileStyles();
});

/* JAVASCRIPT
 /
*/
gulp.task('js', function () {
  return compileJavascript();
});

/*
 / Watcher
*/
gulp.task('watch', function () {
  gulp.watch(config.src.php)
    .on('change', function (path, stats) {
      compilePhp();
    });

  gulp.watch(config.src.stylesWatch)
    .on('change', function (path, stats) {
      compileStyles();
    });

  gulp.watch(config.src.js)
    .on('change', function (path, stats) {
      compileJavascript();
    });
});

/*
 / browserSync task
*/
gulp.task('browserSync', function () {
  return browserSync.init({
    proxy: 'dez-center'
  });
});

/*
 / DEFAULT task
*/
// gulp.task('default', gulp.parallel('img', 'html', 'styles', 'js', 'watch', 'browserSync'));
gulp.task('default', gulp.parallel('php', 'js', 'styles', 'watch', 'browserSync'));

gulp.task('full', gulp.parallel('img', 'php', 'js', 'styles'));


/*
/////////////////////////////////////////////////////////
 / FUNCTIONS
*/
function compileJavascript() {
  return gulp.src(config.src.js)
    //.pipe(uglify())
    .pipe(gulp.dest(config.dest.js))
    .pipe(reload({
      stream: true
    }));
}

function compileStyles() {
  return gulp.src(config.src.styles)
    //.pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(prefixer())
    .pipe(cleanCSS())
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest.styles))
    .pipe(reload({
      stream: true
    }));
}

function compilePhp() {
  return gulp.src(config.src.php)
    .pipe(gulp.dest(config.dest.root))
    .pipe(reload({
      stream: true
    }));
}