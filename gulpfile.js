//credits dennis for tools
var gulp = require('gulp');
//prefixes
var autoprefixer = require('gulp-autoprefixer');
//syncs all browsers (wow)
var browserSync = require('browser-sync').create();
//caches
var cache = require('gulp-cache');
//concatenates files, putting them together
var concat = require('gulp-concat');
//minify css
var cssnano = require('gulp-cssnano');
//minify js
var uglify = require('gulp-uglify');
//minify images
var imagemin = require('gulp-imagemin');

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