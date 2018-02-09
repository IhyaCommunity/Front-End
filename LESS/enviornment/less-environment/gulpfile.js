const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const less = require('gulp-less');
const BrowserSync = require('browser-sync').create();


var lessDir = 'assets/less/**/*.less';

// Step-1 : Create Task

gulp.task('less', function () {
    gulp.src('assets/less/main.less')
        .pipe(less())
        .pipe(cleanCss())
        .pipe(gulp.dest('assets/style'))
        .pipe(BrowserSync.stream());
});

// live-reload

gulp.task('live-reload',['less'], function () {
    BrowserSync.init({
        server: "./assets"
    });
    gulp.watch(lessDir, ['less']);
    gulp.watch('./assets/*.html').on('change', BrowserSync.reload);
});

// Step-2 : Watch Task

// gulp.task('watch:less', function () {
//     gulp.watch(lessDir, ['less']);
// });

// Step-3 : Create Default Task

gulp.task('default', ['less', 'live-reload']);
