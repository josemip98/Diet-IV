# Despliegue funciones serverless en GitHub con Vercel

## Conexión

Lo primero de todo será registrarme en vercel y enlazar mi proyecto de GitHub.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/registroVercel.png)

Una vez hecho esto, le damos a importar proyecto.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/importarProyectoVercel.png)

Seleccionamos el directorio de nuestro repositorio que contiene el código fuente.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/configVercel.png)

Y ya tendriamos nuestro proyecto desplegado en vercel.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/despliegueVercel.png)

Para probarlo tenemos que crear una carpeta api que es donde incluiremos las funciones, para este caso voy a crear una función serverless de prueba que se llamara [hello.js](https://github.com/josemip98/OrganizeUDiet/blob/master/api/hello.js) que sólo imprime en pantalla el mensaje "Hello World".

- req: Obtenemos el valor de name, si no le damos ningún valor imprimirá un hola mundo.
- status: Establecemos el código de estado que se envía con la respuesta.
- send: es una función en la que enviamos la respuesta.
- res: Enviamos la respuesta.

El resultado es el siguiente:

Sin darle ningún valor a name:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoVercel1.png)

Pasandole el valor a name:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoVercel2.png)



