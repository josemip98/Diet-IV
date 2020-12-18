const gulp = require('gulp');
const shell = require('gulp-shell');
var jest = require('gulp-jest').default;
const pm2 = require('pm2');

// Tarea para instalación de dependencias
gulp.task('install', shell.task(['npm install']));

gulp.task('build', shell.task(['npm build']));

// Tarea para ejecución de tests
gulp.task('test', () => (
    gulp.src('tests', {read: false})
        .pipe(jest({reporter:'default'}))
));
