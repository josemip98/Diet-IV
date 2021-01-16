# Despliegue en un PaaS

## Descripción y justificación de las herramientas usadas para desplegar la aplicación en el PaaS.

Las herramientas utilizadas para el despliegue de la aplicación en el PaaS has sido PM2, Heroku y mi gestor de tareas gulp.

### ¿Por qué PM2?

Pm2 es un gestor de procesos en producción para las aplicaciones Node.js que tiene un balanceador de carga incorporado. PM2 permite mantener siempre activas las aplicaciones y volver a cargarlas evitando los tiempos de inactividad, a la vez que facilita tareas comunes de administrador del sistema. PM2 también permite gestionar el registro de aplicaciones, la supervisión y la agrupación en clúster.

Las principales características de pm2:

+ Capacidad de manejar un montón de apps. (Ver el estado de distintas apps)
+ Capacidad de monitoreo de memoria y cps de nuestros procesos.
+ Manejo de logs.
+ Balanceo de carga.
+ Iniciar tus aplicaciones una vez el servidores se inicia.
+ Capacidad de “watch your code” si tu codigo cambia.

Para instalarlo:

`npm install -g pm2`

En el archivo [gulpfile.js](https://github.com/josemip98/OrganizeUDiet/blob/master/gulpfile.js) he creado la tarea **start** para arrancar el microservicio y la tarea **stop** para detenerlo utilizando **PM2** para ello.

He seguido esta [guia](https://pm2.keymetrics.io/docs/usage/application-declaration/) para realizarlo.

### ¿Por qué Heroku?

He elegido Heroku como PaaS por su simplicidad a la hora de configurarlo y su facil uso. 
Tiene una documentación muy útil para guiarte durante todo el procedimiento. Es muy sencillo de escalar inicialmente (Dynos) y goza de un gran soporte de plugins.

### Como desplegar la aplicación

El despliegue consiste de los siguientes pasos:

+ Hacemos un fork del repositorio de la aplicación.

Debemos tener instalado el CLI de Heroku y ejecutar el siguiente comando para loguearnos en Heroku:

`heroku login`

Creamos la aplicación en Heroku con el comando:

`heroku create nombre-aplicacion`

Creamos un Procfile, que es un archivo de texto simple que contiene el comando que queremos que se ejecute para iniciar la aplicación, en mi caso será con mi gestor de tareas **gulp**:

`web: gulp start`

El Procfile se puede ver [aquí](https://github.com/josemip98/OrganizeUDiet/blob/master/Procfile)

De esta forma, se declara un proceso: web, y el comando necesario para correrlo. 

Es importante usar el nombre web, pues de esta forma se indica que dicho proceso se adjuntará a la pila de enrutamiento de HTTP de Heroku y recibirá el tráfico web cuando se implemente.

Y hacemos push al remoto de Heroku para desplegar nuestro código:

`git push heroku master`

En el siguiente apartado veremos como podemos solucionar esto para que cada vez que cambiemos algo no tengamos que hacer push heroku con la configuración de despliegue automático.

Escalamos nuestra dyno (al menos una instancia):

`heroku ps:scale web=1`

Una vez hecho esto ya estará desplegada esta misma aplicación y con el comando `heroku open` podremos acceder a ella.

## Descripción correcta de la configuración para despliegue automático, desde el repositorio o desde el sistema de integración continua.

Nos interesa no tener que estar trabajando con dos repositorios a la vez (el remoto de Heroku y el nuestro propio). Para ello vamos a recurrir a la configuración que se ofrece en la web de Heroku para habilitar el despliegue automático con GitHub. 

Además, vamos a indicar que se tengan que pasar los tests de Integración Continua.

**Accedemos a los ajustes, concretamente al apartado Deploy**

Accedemos a la web de Heroku para ello porque por línea de comandos no es posible, nos logueamos y entramos a los ajustes, al apartado Deploy.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/configuracionAutomatica1.png)

**Vamos a Deployment method y conectamos con GitHub:**
Lo que queremos es modificar el método de despliegue, pues queremos que sea automático y con git, ya que cada vez que hagamos git push queremos evitar hacer git push heroku master.

**Autorizamos la aplicación en GitHub:**
Como es de esperar, este despliegue automático no es posible si no autorizamos el acceso de la aplicación a nuestro perfil.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/configuracionAutomatica2.png)

Ahora indicamos la aplicación que queremos conectar en App connected to GitHub:
Volviendo a los ajustes de Heroku, indicamos el repositorio con el que queremos conectar.

Podemos comprobar como ya se ha conectado correctamente a nuestro repositorio de GitHub.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/configuracionAutomatica3.png)

**En Automatic deploys indicamos la rama concreta (master) y marcamos que se tengan que pasar los tests de integración continua antes del despliegue:**

Es importante que el código que se despliegue no contenga errores, para evitar esto se incluyen los tests de Integración Continua en el despliegue.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/configuracionAutomatica4.png)

## Funcionamiento correcto del despliegue en el PaaS (no sólo el status). Es decir, no se puede devolver ningún status 500. Buenas prácticas en el diseño del API, incluyendo su correspondencia correcta con diferentes HUs.

Puede probarse lo que se va a comentar a continuación sobre la api alojada en el siguiente enlace:

Enlace API: https://organizeudiet.herokuapp.com/ 

### Códigos de estado utilizados:

Cuando una operación tenga éxito, se devolverá el código de estado: 200.

Excepto si la operación ha sido de crear un objeto, se devolverá el código de estado: 201.

Cuando una operación falle porque no se encuentra un recurso, se devolverá el código de estado: 404.

### Todas las rutas de nuestra API y relación con HUs**

+ /
[HU10] - Como usuario del microservicio me gustaría comprobar que está disponible con un mensaje de bienvenida

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento1.png)

+ /status 
[HU10] - Para comprobar si está activo, devuelve: { status: \"OK\" }

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento2.png)

+ /producto/:producto
[HU03] - Como usuario debo poder consultar un producto concreto perteneciente a una dieta. El formato a mostrar será el producto junto con su información nutricional.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento3.png)

+ /producto
[HU05] - Como usuario debo poder añadir un producto a una dieta.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento4.png)

[HU06] - Como usuario debo poder modificar un producto de una dieta.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento5.png)

[HU07] - Como usuario debo poder eliminar un producto de una dieta.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento8.png)

+ /listado
[HU04] - Como usuario debo poder consultar el listado de productos disponibles.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento7.png)

+ /ordenaAlfabeticamente/:orden
[HU08] - Como usuario debo poder ordenar de manera ascendente o descendente una dieta.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento10.png)

+ /ordena/:orden
[HU09] - Como usuario debo poder ordenar una dieta según la información nutricional.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento14.png)


### API en funcionamiento:

Para comprobar el estado de la API tenemos tanto la ruta / que nos muestra un mensaje de que funciona correctamente y la ruta /status que devuelve el estado OK si la API esta funcionando.

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento1.png)

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento2.png)

Con la orden /producto podemos añadir un nuevo producto a la dieta indicando los valores del producto que queremos añadir con la ruta /producto y un método **POST**

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento4.png)

Podemos comprobar que se ha creado correctamente si utilizamos la ruta /producto/:nombre_producto para buscarlo:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento3.png)

Con la orden /producto podemos modificar un producto de la dieta  indicando los valores del producto que queramos modificar con la ruta /producto y un método **PUT**

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento5.png)

Podemos comprobar que se ha modificado correctamente si utilizamos la ruta /producto/:nombre_producto para buscarlo:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento6.png)

Con la ruta /listado podemos listar todos los productos pertenecientes a la dieta:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento7.png)

Con la orden /producto podemos eliminar un producto de la dieta indicando el nombre del producto que queremos eliminar con la ruta /producto y un método **DELETE**

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento8.png)

Si hacemos un /listado podemos comprobar que se ha eliminado correctamente el producto "macarrones"

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento9.png)

Podemos ordenar alfabéticamente los productos de una dieta con la ruta /ordenaAlfabeticamente/:orden:

Tanto de manera ascendente:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento10.png)

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento11.png)

Como descendente:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento12.png)

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento13.png)

Y por último podemos ordenar según la información nutricional con la ruta ordena/:orden:

Por grasa:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento14.png)

Por proteinas:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento15.png)

Por hidratos:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento16.png)

Por calorias:

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/funcionamiento17.png)

## Uso correcto de bases de datos y logs dentro del PaaS, incluyendo su justificación y pruebas de prestaciones, así como avance general y grado de terminación de la aplicación.

### Logs

Utilizo el log que proporciona Heroku.

Para acceder al log de la aplicación utilizamos el comando:

`heroku logs --tail`

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/logHeroku.png)


