'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('css/*.css', ['css']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('css', function() {
    return gulp.src('css/*.css') 
        .pipe(browserSync.stream());
    
})