# OrganizeUDiet
Proyecto para la asignatura de Infraestructura Virtual.

***

## Descripción
API para la organización y gestión de tu dieta. ¿Tienes problemas para organizar tu dieta o estás cansado de comer siempre los mismos alimentos? 
Aquí podrás consultar todo tipo de alimentos junto con su información nutricional (calorias, grasa, proteinas y hidratos) y organizarla a tu gusto, podrás variar entre alimentos que sean parecidos entre sí nutricionalmente y hacer tu dieta más variada. 

Una dieta está formada por una lista de productos.

El formato a mostrar será:

+ Producto -> Información nutricional

La información nutricional consta de: 
	+ Calorias
	+ Grasa
	+ Proteinas
	+ Hidratos	
	
***

## Herramientas

 + [Justificación de herramientas](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/herramientas.md)
 
 + **Lenguaje:** [JavaScript + Node.js](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/herramientas.md#lenguaje-de-programacion)
 + **Frameworks:** [Meteor JS](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/herramientas.md#frameworks)
 + **Tests:** [Jest](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/herramientas.md#tests)
 + **Task runner:** [Gulp](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/herramientas.md#herramienta-de-construcci%C3%B3n)
 + **Base de datos:** [MongoDB](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/herramientas.md#lenguaje-de-programacion)
 + **Despliegue de la aplicación en la nube:** [Docker](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/herramientas.md#despliegue-de-la-aplicaci%C3%B3n-en-la-nube)
 + **Log:** *Por decidir*

***

## Test

Para la realización de los test primero debes clonar este repositorio y tener instalado Node, Gulp y npm:

`git clone https://github.com/josemip98/OrganizeUDiet`

Instalamos las dependencias:

`npm install`

Lanzamos los tests con Gulp:

`gulp test`

***

## Docker

Para el despliegue de la aplicación en la nube vamos a utilizar Docker. Para ello primero necesitamos elegir un contenedor base. [Aquí](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/eleccionContenedor.md) se puede consultar las pruebas realizadas y la decisión tomada.

***

## Dockerfile

Para la creación del Dockerfile he seguido [estos](https://www.campusmvp.es/recursos/post/mejores-practicas-para-crear-dockerfiles-excelentes.aspx) consejos de buenas prácticas.

+ [Dockerfile](https://github.com/josemip98/OrganizeUDiet/blob/master/Dockerfile)

***

## GitHub Container Registry

He subido mi [contenedor](https://github.com/users/josemip98/packages/container/package/organizeudiet) a **GitHub Container Registry** y [aquí](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/github-container.md) explico los pasos seguidos para ello.

***

## Ejecución test a partir de Docker

Nos descargamos el repositorio de GitHub y ejecutamos los siguientes comandos:

`docker pull josemip98/organizeudiet`

`docker run -t -v `pwd`:/test josemip98/organizeudiet`

Si queremos usar el contenedor de GitHub Container Registry, debemos ejecutar los siguientes comandos:

`docker pull ghcr.io/josemip98/organizeudiet:latest`

`docker run -t -v `pwd`:/test ghcr.io/josemip98/organizeudiet:latest`

***

## Recopilación de enlaces

+ [Configuración de git](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/git_config.md)
+ Carpeta de [documentos](https://github.com/josemip98/OrganizeUDiet/tree/master/docs)
+ Carpeta de [código fuente](https://github.com/josemip98/OrganizeUDiet/tree/master/src)
+ Carpeta de [test](https://github.com/josemip98/OrganizeUDiet/tree/master/tests)
+ [Fichero package.json](https://github.com/josemip98/OrganizeUDiet/blob/master/package.json)
+ [Fichero gulpfile.js](https://github.com/josemip98/OrganizeUDiet/blob/master/gulpfile.js)
+ Fichero [iv.yaml](https://github.com/josemip98/OrganizeUDiet/blob/master/iv.yaml)

***

## Tareas
En este [documento](https://github.com/josemip98/OrganizeUDiet/tree/master/docs/pasos.md) se muestran los pasos seguidos para el desarrollo del proyecto.

+ [Lista de issues cerrados](https://github.com/josemip98/OrganizeUDiet/issues?q=is%3Aissue+is%3Aclosed)
+ [Lista de milestones](https://github.com/josemip98/OrganizeUDiet/milestones)

***

## Historias de usuario
En este apartado se irán añadiendo las historias de usuario

+ [HU01](https://github.com/josemip98/OrganizeUDiet/issues/9). Consultar dieta.
	+ Como usuario debo poder consultar el listado de productos que conforman la dieta junto con su información nutricional.
+ [HU02](https://github.com/josemip98/OrganizeUDiet/issues/15) Consultar productos similares.
	+ Como usuario, dado un producto debo poder consultar productos nutricionalmente similares.
+ [HU03](https://github.com/josemip98/OrganizeUDiet/issues/20) Consultar producto concreto.
	+ Como usuario debo poder consultar un producto concreto perteneciente a una dieta. El formato a mostrar será el producto junto con su información nutricional.
	
***

## Autor
+ [Jose Miguel Pelegrina Pelegrina](https://github.com/josemip98)

***

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
