
# Pasos para la realización del proyecto

## Hito 0 - Configuración GitHub

Este hito es basicamente configurar y entender el funcionamiento de GitHub ya que se utilizará para el desarrollo del proyecto. Para ello he realizado las siguietnes tareas:

+ Realizar un Fork del repositorio de la [asignatura](https://github.com/JJ/IV-20-21)
+ Actualizar fichero de [objetivos](https://github.com/JJ/IV-20-21/blob/master/objetivos/josemip98.md)
+ Configurar git (creación par de claves pública y privada y hacer uso de SSH)
+ Creación del repositorio para nuestro [proyecto](https://github.com/josemip98/OrganizeUDiet)
  + Añadir archivo .gitignore
  + Añadir licencia
  + Añadir archivo README.md con la descripción general del proyecto
+ Modificar hito-0.md y hacer Pull Request con el enlace de mi proyecto.

## Hito 1 - Estructura general del proyecto

Para este hito he aprendido a utilizar issues y milestones que son imprescindibles para ir desarrollando el proyecto ya que nos vamos marcando tareas.
Primero he creado milestones para los hitos 1,2 y 3. 
El milestone 1 consiste basicamente en explicar la estructura general del proyecto, explicando el problema a resolver, elegir el lenguaje, las herramientas que vamos a utilizar y crear la clase principal.

Para ello he realizado las siguientes tareas:

+ Elección de herramientas a utilizar en el proyecto.
+ Añadir razones por las que elegir dichas [herramientas](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/herramientas.md)
+ Revisar documentación para enlazar todo lo realizado en el hito.
+ Crear archivo [iv.yaml](https://github.com/josemip98/OrganizeUDiet/blob/master/iv.yaml)
+ Crear clase [producto](https://github.com/josemip98/OrganizeUDiet/blob/master/src/producto.js)
+ Instalar Node.js
+ Modificar fichero gitignore
+ Crear fichero pasos.md en el que iré explicando los pasos a seguir para realziar el proyecto.

Además he creado una historia de usuario:

+ [HU01](https://github.com/josemip98/OrganizeUDiet/issues/9) - Consultar producto

Una vez cerrados todos los issues, modifico el fichero hito-1.md y hacemos Pull Request.

## Hito 2 - Tests

En este hito aprenderemos a testear nuestro código. Primero debemos elegir una herramienta para ello, en mi caso, estaba entre Jest y Mocha pero como explico en este [documento](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/herramientas.md) finalmente me he decidido por Jest. Una vez hecho esto, debemos crear una carpeta Tests en el que incluiremos un fichero donde se implementaran los tests para la clase dieta para testear las distintas funciones que creemos en la clase.

Además de esto, he realziado las siguientes tareas:

+ Actualizar README.md para incluir lo realizado en este hito

+ Actualizar fichero herramientas.md en el que explico el porqué he elegido cada herramienta

+ Actualizar fichero pasos.md con el hito 2

+ Crear [test](https://github.com/josemip98/OrganizeUDiet/blob/master/tests/dieta.test.js) 

+ Actualizar fichero iv.yaml con el lenguaje, clase y test.

+ Crear fichero packaje.json 

+ Añadir carpeta para los test

También he creado dos historias más de usuario:

+ [HU02](https://github.com/josemip98/OrganizeUDiet/issues/15) Consultar productos similares.
	+ Como usuario, dado un producto debo poder consultar productos nutricionalmente similares.
+ [HU03](https://github.com/josemip98/OrganizeUDiet/issues/20) Consultar producto concreto.
	+ Como usuario debo poder consultar un producto concreto perteneciente a una dieta. El formato a mostrar será el producto junto con su información nutricional.
  
Una vez he cerrado los issues del hito 2, he modificado el fichero hito-2.md y he realizado un Pull Request.

## Hito 3: Creación de un contenedor para pruebas

+ Construir fichero Dockerfile
+ Crear repositorio en Docker Hub enlazado con el de GitHub
+ Crear paquete en GitHub Container Registry enlazado con el de GitHub
+ Redactar en el archivo README.md la justificación de la elección de nuestra imagen base
+ Actualizar el archivo README.md para añadir la documentaión correspondientes a este hito


Una vez he cerrado los issues del hito 3, he modificado el fichero hito-3.md y he realizado un Pull Request.

## Hito 4: Integración continua

+ Enlazar nuestro repositorio con Travis CI
+ Construir fichero .travis.yml
+ Enlazar nuestro repositorio con Circle CI
+ Construir fichero config.yml
+ Añadir capturas de pantalla del funcionamiento de los distintos sistemas de integración continua
+ Actualizar el archivo README.md para añadir la documentaión correspondientes a este hito

Una vez he cerrado los issues del hito 4, he modificado el fichero hito-4.md y he realizado un Pull Request.

## Hito 5: Uso de sistemas serverless

+ Enlazar nuestro repositorio con Vercel
+ Enlazar nuestro repositorio con Netlify
+ Añadir capturas de pantalla del funcionamiento de nuestro bot de Telegram
+ Implementación de la función consultaProducto en Vercel y su integración con el bot de Telegram
+ Implementación de la función listadoProductos en Netlify
+ Construir nuestro fichero 5.json con la información que devuelve nuestra funcion consultaProducto
+ Actualizar el archivo README.md para añadir la documentaión correspondientes a este hito

Una vez he cerrado los issues del hito 5, he modificado el fichero hito-5.md y he realizado un Pull Request.

## Hito 6: Diseño y test de un microservicio

+ Elección de framework
+ Documentación de la elección de Express
+ Construcción de la API
+ Documentación de la API
+ Realizar tests de integración
+ Documentar tests de integración
+ Actualizar el archivo README.md para añadir la documentaión correspondientes a este hito

Una vez he cerrado los issues del hito 6, he modificado el fichero hito-6.md y he realizado un Pull Request.
