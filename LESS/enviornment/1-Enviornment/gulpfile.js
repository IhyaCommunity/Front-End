var gulp = require('gulp');
var less = require('gulp-less');
var lesshint = require('gulp-lesshint');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});

var lessDir = './less/**/';

gulp.task('less', function () {
    return gulp.src(lessDir + '[^_]*.less')
        .pipe(sourcemaps.init())
        .pipe(less({
        paths: [path.join(__dirname, 'less')],
        plugins: [autoprefix, cleanCSSPlugin]
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});

gulp.task('less:watch', function () {
    gulp.watch(lessDir + '*.less', ['less']);
});

gulp.task('default', ['less', 'less:watch']);

gulp.task('lint', () => {
    return gulp.src(lessDir + '*.less')
        .pipe(lesshint())
        .pipe(lesshint.reporter())
        .pipe(lesshint.failOnError());
});