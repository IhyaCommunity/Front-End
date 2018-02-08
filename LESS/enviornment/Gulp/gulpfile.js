var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var less = require('gulp-less');

// minify css
gulp.task('minify-css',function() {
    gulp.src('style/style.css')
        .pipe(cleanCss())
        .pipe(gulp.dest('style/minifycss'));
});

// minify js
gulp.task('mini-js', function() {
    gulp.src('script/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('script/minifyjs'))
});

// CSS preprocessor LESS

gulp.task('less', function() {
    gulp.src('less/less-files/*.less')
        .pipe(less())
        .pipe(gulp.dest('less/compiled-css'))
})
