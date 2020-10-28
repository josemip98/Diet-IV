const gulp = require('gulp');
var jest = require('gulp-jest').default;

// Tarea para ejecución de tests
gulp.task('test', () => (
    gulp.src('tests', {read: false})
        .pipe(jest({reporter:'default'}))
));
