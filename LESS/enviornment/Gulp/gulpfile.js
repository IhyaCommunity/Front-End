var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var less = require('gulp-less');
var uglify = require('gulp-uglify');

// minify css

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

// minify js

gulp.task('minifyJS', function () {
    return gulp.src('script/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('script/minifyjs'));
});

// image optimization
// ...
 