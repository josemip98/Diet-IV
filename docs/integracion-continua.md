# Integración continua

En este documento explicaré todos los aspectos relativos a la integración continua que incluye nuestro proyecto.

Para ello he utilizado **Travis y Circle CI**.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/IC.png)

## Integración continua con Travis

En primer lugar, debemos registrarnos en Travis y configurarlo, en este [documento](https://github.com/josemip98/EjerciciosIV/tree/master/Tema%202%20-%20TDD#ejercicio-9) lo explico.

Después creamos un archivo .travis.yml, en mi caso quedó así:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/travis.png)

Lo que hago es indicar el lenguaje que voy a utilizar con language, en mi caso es node_js.
Después compruebo que funciona para diferentes versiones de NodeJS desde la 8 a la última la 15.

En la sección de before_install instalamos jest y **mi gestor de tareas gulp** para la posterior instalación de la aplicación con **gulp install** y el lanzamiento de los tests con **gulp test**.

El resultado de Travis fué el siguiente:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoTravis1.png)

## Integración continua con Circle CI

Como sistema de integración continua adicional he decidido utilizar Circle CI.
Primero me he registrado en la web y he creado el archivo .config.yml:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/circleCI.png)

Indico la versión de Circle CI. Creo una tarea llamada test en el que utilizamos la imagen de mi contenedor josemip98/organizeudiet. Despues creamos el listado de ordenes para ejecutar que serán:

- checkout: Para comprobar errores
- run: Para lanzar los tests con gulp test.

Por último definimos la tarea a ejecutar que es la de ejecutar los test.

Podemos ver como los tests pasan correctamente.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoCI.png)
