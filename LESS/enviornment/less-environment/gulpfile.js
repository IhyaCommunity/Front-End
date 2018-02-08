const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const less = require('gulp-less');

var lessDir = 'assets/less/**/*.less';

// Step-1 : Create Task

gulp.task('less', function () {
    gulp.src('assets/less/main.less')
        .pipe(less())
        .pipe(cleanCss())
        .pipe(gulp.dest('assets/style'))
});

// Step-2 : Watch Task

gulp.task('watch:less', function () {
    gulp.watch(lessDir, ['less']);
});

// Step-3 : Create Default Task

gulp.task('default', ['less', 'watch:less']);
