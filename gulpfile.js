const gulp         = require('gulp');
const browserSync  = require('browser-sync');

const reload = browserSync.reload;


 /* HTML
 /
*/
gulp.task('html', function() {
  gulp.src('*.html').pipe(reload({ stream: true }));
}); 

 /*
 / Watcher
*/
gulp.task('watch', function() {
  gulp.watch(['*.html', 'assets/css/custom.css'])
    .on('change', function(path, stats) {
      gulp.src('*.html').pipe(reload({ stream: true }));
    });
});

/*
 / browserSync task
*/
gulp.task('browserSync', function () {
  return browserSync({
    server: {
      baseDir: './'
    },
    open: true,
    notify: false
  });
});

/*
 / DEFAULT task
*/
gulp.task('default', gulp.parallel('html', 'watch', 'browserSync'));