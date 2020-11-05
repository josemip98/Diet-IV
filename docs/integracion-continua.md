# Integración continua

En este documento explicaré todos los aspectos relativos a la integración continua que incluye nuestro proyecto.

Para ello he utilizado Travis y Circle CI.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/IC.png)

## Integración continua con Travis

En primer lugar, debemos registrarnos en Travis y configurarlo, en este [documento](https://github.com/josemip98/EjerciciosIV/tree/master/Tema%202%20-%20TDD#ejercicio-9) lo explico.

Después creamos un archivo .travis.yml, en mi caso quedó así:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/travis.png)

Lo que hago es indicar el lenguaje que voy a utilizar con language, en mi caso es node_js.
Después compruebo que funciona para diferentes versiones de NodeJS desde la 8 a la 14.

En la sección de before_install incluimos los que queramos instalar antes de que se instale la aplicación (npm install), instalamos jest y gulp para el posterior lanzamiento de los tests con gulp test.

El resultado de Travis fué el siguiente:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoTravis1.png)

## Utilizando el contenedor de Docker Hub

Finalmente para **aprovechar el contenedor de Docker** que generamos cambié el fichero .travis.yml y quedó de la siguiente manera:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/travis-final.png)

Descubrí gracias al grupo de telegram de la asignatura que existe una versión de Travis minimal la cuál solo contiene herramientas de control de versiones y de compilación esenciales.

Instalo docker y ejecuto la orden docker pull de nuestro docker almacenado en Docker Hub.

Por último, en la sección de script especifico el comando a ejecutar que será el de ejecución de los tests.

En las dos siguientes capturas podemos comprobar los resultados obtenidos:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoTravis.png)
![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoTravis2.png)

## Integración continua con Circle CI

Como sistema de integración continua adicional he decidido utilizar Circle CI.
Primero me he registrado en la web y he creado el archivo .config.yml:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/CircleCI.png)

Primero indico la versión de Circle CI. Creo una tarea llamada test en el que utilizamos la imagen de node, después instalamos las dependencias con npm install e instalamos **jest** y  mi **gestor de tareas gulp** con npm install -g jest y npm install -g gulp. Despues lanzamos los tests con gulp test.

Podemos ver como los tests pasan correctamente.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoCI.png)
