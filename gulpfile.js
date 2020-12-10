const gulp = require('gulp');
const shell = require('gulp-shell');
var jest = require('gulp-jest').default;
const pm2 = require('pm2');

// Tarea para instalación de dependencias
gulp.task('install', shell.task(['npm install']));

// Tarea para ejecución de tests
gulp.task('test', () => (
    gulp.src('tests', {read: false})
        .pipe(jest({reporter:'default'}))
));

// Tarea para arrancar el microservicio
gulp.task('start', function () {
  pm2.connect(true, function () {
    pm2.start({
      name: 'OrganizeUDiet',
      script: 'bin/www',
      exec_mode: 'cluster',
      instances: 4
    }, function () {
         console.log('Arrancando OrganizeUDiet.');
         pm2.streamLogs('all', 0);
       });
  });
});

// Tarea para parar el microservicio
gulp.task('stop', shell.task(['pm2 stop OrganizeUDiet']));
