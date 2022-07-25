import gulp from 'gulp';
import browserSync from 'browser-sync';
import del from 'del';
import cssImport from 'gulp-cssimport';
import cssMin from 'gulp-cssmin';
import rename from 'gulp-rename';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
// import terser from 'gulp-terser';
// import gulpImg from 'gulp-image';

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
            minimize: true//false if terser
        },
        output: {
            filename: 'index.js'
        }
    }, webpack))
    // .pipe(terser())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browserSync.stream());

const copy = () => gulp
    .src([
        'src/fonts/**/*',
        'src/images/**/*',
        'src/styles/normalize.css'
    ], {
        base: 'src'
    })
    .pipe(gulp.dest('dist'));


// const img = () => gulp
//     .src('src/images/**/*.{jpg, jpeg, png, svg, gif}')
//     .pipe(gulpImg())
//     .pipe(gulp.dest('dist/images'));

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

export default gulp.series(clear, gulp.parallel(html, cssmin, js, copy), server);//,img
