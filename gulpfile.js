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


/* IMG
 /
*/
gulp.task('img', function () {
  return gulp.src(config.src.img)
    .pipe(gulp.dest(`${config.dest.main}/${config.dest.page}/${config.dest.page}/img`))
    .pipe(gulp.dest(`${config.dest.php}/${config.dest.page}/img`));
});

/* HTML
 /
*/
gulp.task('html', function () {
  return compileHtml();
});

/* HTML to PHP
 /
*/
gulp.task('php-build', function () {
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
  gulp.watch(config.src.html)
    .on('change', function (path, stats) {
      compileHtml();
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
 / PHP Watcher
*/
gulp.task('watch-php', function () {
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
  return browserSync({
    server: {
      baseDir: `./dist/${config.dest.page}`
    },
    open: true,
    notify: false
  });
});

gulp.task('browserSync-php', function () {
  return browserSync.init({
    server: {
      proxy: 'localhost'
    }
  });
});

/*
 / DEFAULT task
*/
gulp.task('default', gulp.parallel('img', 'html', 'styles', 'js', 'watch', 'browserSync'));

/*
 / task for PHP
*/
gulp.task('php', gulp.parallel('img', 'php-build', 'styles', 'js', 'watch-php'));


/*
/////////////////////////////////////////////////////////
 / FUNCTIONS
*/
function compileJavascript() {
  const first = gulp.src(config.src.js)
    //.pipe(uglify())
    .pipe(gulp.dest(`${config.dest.main}/${config.dest.page}/${config.dest.page}`))
    .pipe(gulp.dest(`${config.dest.php}/${config.dest.page}`));

  const second = gulp.src(config.src.jsShared)
    //.pipe(uglify())
    .pipe(gulp.dest(`${config.dest.main}/${config.dest.page}`))
    .pipe(gulp.dest(`${config.dest.php}`))

  return merge(first, second)
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
    .pipe(gulp.dest(`${config.dest.main}/${config.dest.page}/${config.dest.page}`))
    .pipe(gulp.dest(`${config.dest.php}/${config.dest.page}`))
    .pipe(reload({
      stream: true
    }));
}

function compileHtml() {
  return gulp.src(config.src.html)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(`${config.dest.main}/${config.dest.page}`))
    .pipe(reload({
      stream: true
    }));
}

function compilePhp() {
  return gulp.src(config.src.php)
    .pipe(gulp.dest(config.dest.php))
    .pipe(reload({
      stream: true
    }));
}