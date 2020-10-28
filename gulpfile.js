const gulp = require('gulp');
var jest = require('gulp-jest').default;
const shell = require('gulp-shell');

// Tarea para instalación de dependencias
gulp.task('install', shell.task(['npm install']));

// Tarea para ejecución de tests
gulp.task('test', () => (
    gulp.src('test', {read: false})
        .pipe(jest({reporter:'default'}))
));
