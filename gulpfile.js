import gulp from 'gulp';
import browserSync from 'browser-sync';
import del from 'del';
import cssImport from 'gulp-cssimport';
import cssMin from 'gulp-cssmin';
import rename from 'gulp-rename';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';

const html = () => gulp
    .src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());

const cssmin = () => gulp
    .src('src/styles/index.css')
    .pipe(cssImport())
    .pipe(cssMin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream());

const js = () => gulp
    .src('src/scripts/**/*.js')
    .pipe(webpackStream({
        mode: 'production',
        devtool: false,
        optimization: {
            minimize: true
        },
        output: {
            filename: 'index.js'
        }
    }, webpack))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browserSync.stream());

const copy = () => gulp
    .src([
        'src/fonts/**/*',
        'src/images/**/*'
    ], {
        base: 'src'
    })
    .pipe(gulp.dest('dist'));

const server = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
};

const clear = () => del('dist/**/*');

gulp.watch('src/*.html', html);
gulp.watch('src/styles/**/*.css', cssmin);
gulp.watch('src/scripts/**/*.js', js);

export default gulp.series(clear, gulp.parallel(html, cssmin, js, copy), server);
