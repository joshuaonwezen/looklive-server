//credits dennis for tools
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cache = require('gulp-cache');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

gulp.task('styles', function () {
    return gulp.src('src/styles/**/*.css',  { sourcemaps : true })
            .pipe(concat('style.css'))
            .pipe(autoprefixer('prefix'))
            .pipe(cssnano())
            .pipe(gulp.dest('public/styles'))
            .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
    return gulp.src('src/js/**/*.js', { sourcemaps : true })
            .pipe(concat('app.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('public/js'));
});

gulp.task('images', function () {
    return gulp.src('src/images/**/*')
            .pipe(cache(imagemin({
                optimizationLevel: 3,
                progressive: true,
                interlaced: true
            })))
            .pipe(gulp.dest('public/images'));
});

gulp.task('scripts-watch', ['scripts'], browserSync.reload);
gulp.task('images-watch', ['images'], browserSync.reload);

gulp.task('serve', ['build'], function () {
    browserSync.init({
        proxy: 'localhost:3000'
    })
    gulp.watch('src/styles/**/*.css', ['styles']);
    gulp.watch('src/js/**/*.js', ['scripts-watch']);
    gulp.watch('src/images/**/*', ['images-watch']);
    gulp.watch('views/**/*.hbs').on('change', browserSync.reload);
});

gulp.task('build', function () {
    gulp.start('styles', 'scripts', 'images');
});

gulp.task('default', ['build']);