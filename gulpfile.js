const gulp        = require('gulp');
const sass        = require('gulp-sass');
const prefixer    = require('gulp-autoprefixer');
const cleanCSS    = require('gulp-clean-css');
const sourcemaps  = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const pug         = require('gulp-pug');
const uglify      = require('gulp-uglify');

const reload = browserSync.reload;


/* IMG
 /
*/
gulp.task('img', function() {
  return gulp.src(config.src.img).pipe(gulp.dest(config.dest.img));
});

 /* HTML
 /
*/
gulp.task('html', function() {
  return compileHtml();
}); 

/* STYLES
 /
*/
gulp.task('styles', function() {
  return compileStyles();
});

/* JAVASCRIPT
 /
*/
gulp.task('js', function() {
  return compileJavascript();
});

 /*
 / Watcher
*/
gulp.task('watch', function() {
  gulp.watch(config.src.html)
    .on('change', function(path, stats) {
      compileHtml();
    });

  gulp.watch(config.src.stylesWatch)
    .on('change', function(path, stats) {
      compileStyles();
    });  

  gulp.watch(config.src.js)
    .on('change', function(path, stats) {
      compileJavascript();
    });  
});

/*
 / browserSync task
*/
gulp.task('browserSync', function () {
  return browserSync({
    server: {
      baseDir: './dist'
    },
    open: true,
    notify: false
  });
});

/*
 / DEFAULT task
*/
gulp.task('default', gulp.parallel('img', 'html', 'styles', 'js', 'watch', 'browserSync'));

/*
 / Config
*/
const config = {
  src: {
    html        : '*.html',
    styles      : 'assets/scss/styles.scss',
    stylesWatch : ['assets/scss/styles.scss', 'assets/scss/source/*.scss'],
    js          : 'assets/js/*.js',
    img         : 'assets/img/*'
  },
  dest: {
    main : 'dist',
    img  : 'dist/img'
  }
}


/*
/////////////////////////////////////////////////////////
 / FUNCTIONS
*/
function compileJavascript() {
  return gulp.src(config.src.js)
          .pipe(uglify())
          .pipe(gulp.dest(config.dest.main))
          .pipe(reload({ stream: true }));
}

function compileStyles() {
  return gulp.src(config.src.styles)
          .pipe(sourcemaps.init())
          .pipe(sass())
          .pipe(prefixer())
          .pipe(cleanCSS())
          .pipe(sourcemaps.write())
          .pipe(gulp.dest(config.dest.main))
          .pipe(reload({ stream: true }));
}

function compileHtml() {
  return gulp.src(config.src.html)
          .pipe(gulp.dest(config.dest.main))
          .pipe(reload({ stream: true }));
}