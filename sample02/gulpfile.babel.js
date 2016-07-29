import gulp from 'gulp';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babel from 'babelify';
import react from 'reactify';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('copy', () => {
  gulp
    .src('./index.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('js', () => {
  console.log('Running js task');
  gulp
    .src('./*.js')
    .pipe(gulp.dest('dist'))
});

gulp.task('compile', () => {
  console.log('Transpiling into es6');
  var b = browserify('./app.js', {
    debug: true
  }).transform(babel, {
    presets: ['es2015', 'react']
  });

  b.bundle()
    .on('error', function (err) {
      console.error(err);
      this.emit('end');
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));

});

// gulp.task('watch:copy', function() {
//   gulp.watch('./*.html', ['copy']);
// });

gulp.task('watch', function() {
  gulp.watch('./*.js', ['js', 'copy', 'compile']);
});

gulp.task('build', ['js', 'copy', 'compile']);
gulp.task('default', ['build', 'watch']);



// import gulp from 'gulp';
// import babel from 'gulp-babel';
// import react from 'gulp-react';
// // import open from 'gulp-open';


// gulp.task('copy', () => {
//   gulp
//     .src('./index.html')
//     .pipe(gulp.dest('dist'))
// });

// gulp.task('transform', () => {
//   return gulp.src('*.jsx')
//     .pipe(react({harmony: false, es6module: true}))
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('es6', ['transform'],() => {
//   return gulp.src('dist/*.js')
//     .pipe(babel())
//     .pipe(gulp.dest('dist'));
// });

// // gulp.task('build',['es6'], () => {
// //   return gulp.src('./index.html');
// //     // .pipe(open(), {app: 'google-chrome'});
// // });

// gulp.task('watch:copy', () => {
//   gulp.watch('./*.html', ['copy']);
// });

// gulp.task('watch:transform', () => {
//   gulp.watch('./*.js', ['transform']);
// });

// gulp.task('watch:es6', () => {
//   gulp.watch('./*.js', ['es6']);
// });

// gulp.task('watch', ['watch:copy', 'watch:transform', 'watch:es6']);


// gulp.task('default', ['transform', es])
// gulp.task("default", () =>  {
//   return gulp.src("app.js")
//     .pipe(babel())
//     .pipe(gulp.dest("dist"));
// });

