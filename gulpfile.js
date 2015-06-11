var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    webserver = require('gulp-webserver');

// watch for changes and run the relevant task
gulp.task('watch', function () {
  gulp.watch('src/**/*.ts', ['compile-ts']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.css', ['css']);
});

gulp.task('serve', ['compile-ts', 'html', 'css', 'watch'], function(){
  gulp.src('build')
    .pipe(webserver({
      open: true
    }));
});

gulp.task('compile-ts', function () {
    var sourceTsFiles = ['src/**/*.ts',                 //path to typescript files
                         'typings/**/*.d.ts'];                    //reference to library .d.ts files

    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(sourcemaps.init())
                       .pipe(tsc({
                           target: 'ES5',
                           module: 'commonjs',
                           declarationFiles: false,
                           noExternalResolve: true,
                           typescript: require('typescript')
                       }));

        tsResult.dts.pipe(gulp.dest('build'));
        return tsResult.js
                        .pipe(sourcemaps.write('.'))
                        .pipe(gulp.dest('build'));
});


// move html
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
});

// move css
gulp.task('css', function () {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('build'))
});