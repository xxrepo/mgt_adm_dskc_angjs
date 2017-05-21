const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.assets']);

gulp.task('app.html', function () {
    gulp.src('app/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        // .pipe(gulp.dest('public'))
        .pipe(gulp.dest('desktopcloud'))
});

gulp.task('app.css', function () {
    gulp.src('app/**/*.css')
        .pipe(uglifycss({uglyComments: true}))
        .pipe(concat('app.min.css'))
        // .pipe(gulp.dest('public/assets/css'))
        .pipe(gulp.dest('desktopcloud/assets/css'))
});

gulp.task('app.js', function () {
    gulp.src('app/**/*.js')
        .pipe(babel({presets: ['es2015']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        // .pipe(gulp.dest('public/assets/js'))
        .pipe(gulp.dest('desktopcloud/assets/js'))
});

gulp.task('app.assets', function () {
    gulp.src('assets/**/*.*')
        // .pipe(gulp.dest('public/assets'))
        .pipe(gulp.dest('desktopcloud/assets'))
});