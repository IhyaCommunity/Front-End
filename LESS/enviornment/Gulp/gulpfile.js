var gulp = require('gulp'),
cleanCss = require('gulp-clean-css'),
less = require('gulp-less'),
uglify = require('gulp-uglify'),
imgMin = require('gulp-imagemin');

// Minify CSS

gulp.task('minify-css', function () {
    return gulp.src('style/style.css')
        .pipe(cleanCss())
        .pipe(gulp.dest('style/minifycss'));
});

// CSS preprocessor LESS

gulp.task('less', function () {
    return gulp.src('less/less-files/*.less')
        .pipe(less())
        .pipe(gulp.dest('less/compiled-css'))
})

// Minify js

gulp.task('minifyJS', function () {
    return gulp.src('script/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('script/minifyjs'));
});

// Image optimization

gulp.task('img-minify', function () {
    gulp.src('img/ultra-hd/*.jpg')
        .pipe(imgMin(
            imgMin.jpegtran({ optimizationLevel: 1 })
        ))
        .pipe(gulp.dest('img/mini'));
});
