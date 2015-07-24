var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var browserSync = require('browser-sync').create();


// Run task 
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

// Watch task - when there's a change task will run
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('sass/**/*.scss', ['sass']);
   	gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest("./css/"))
        .pipe(browserSync.stream());
});
gulp.task('default', ['serve']);