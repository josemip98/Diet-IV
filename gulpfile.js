const gulp = require('gulp');
const shell = require('gulp-shell');
var jest = require('gulp-jest').default;

// Tarea para instalación de dependencias
gulp.task('install', shell.task(['npm install']));

// Tarea para ejecución de tests
gulp.task('test', () => (
    gulp.src('tests', {read: false})
        .pipe(jest({reporter:'default'}))
));
