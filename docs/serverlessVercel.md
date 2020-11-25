# Despliegue funciones serverless en GitHub con Vercel

## Conexión y prueba básica

Lo primero de todo será registrarme en vercel y enlazar mi proyecto de GitHub.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/registroVercel.png)

Una vez hecho esto, le damos a importar proyecto.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/importarProyectoVercel.png)

Seleccionamos el directorio de nuestro repositorio que contiene el código fuente.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/configVercel.png)

Y ya tendriamos nuestro proyecto desplegado en vercel.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/despliegueVercel.png)

Para probarlo tenemos que crear una carpeta api que es donde incluiremos las funciones, para este caso voy a crear una función serverless de prueba que se llamara [hello.js](https://github.com/josemip98/OrganizeUDiet/blob/master/api/hello.js) que sólo imprime en pantalla el mensaje "Hello World".

Nos descargamos vercel cli y ejecutamos el comando `vercel` para vincular el proyecto.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/vercelCLI.png)

Ejecutamos el comando `vercel --prod`para desplegarlo.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/vercelCLI2.png)

El resultado es el siguiente:

Sin darle ningún valor a name:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoVercel1.png)

Pasandole el valor a name:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoVercel2.png)

## Implementación de una función integrada en mi proyecto

He decidido crear una función relacionada con la [HU03](https://github.com/josemip98/OrganizeUDiet/issues/20) con la que consultar un producto concreto. El formato a mostrar será el nombre del producto junto con su información nutricional (Calorías, grasa, proteinas, hidratos).

Primero he creado un archivo [productos.json](https://github.com/josemip98/OrganizeUDiet/blob/master/api/productos.json) que es una lista de productos junto con su información nutricional.

Después he creado el fichero [consultaProducto.js](https://github.com/josemip98/OrganizeUDiet/blob/master/api/consultaProducto.js) en el que tenemos la función.

Desplegamos el proyecto:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/despliegueVercel2.png)

Y aquí podemos ver las funciones que tenemos, hello.js es la función básica que utilizé para probar Vercel, consultaProducto.js es la que he implementado para integrarla en mi proyecto y la de infoProducto.js es otra función que he implementado para la creación de un **BOT de Telegram** que más adelante explicaré.

Además podemos ver como las consultas que estoy realizando no dan errores.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/despliegueVercel3.png)

Los resultados son los siguientes:

Si no indicamos ningún producto:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoVercel3.png)

Si indicamos un producto que no se encuentra disponible:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoVercel4.png)

Si indicamos un producto que esté disponible:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoVercel5.png)


