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

Nos descargamos vercel cli y ejecutamos el comando `vercel` para vincular el proyecto.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/vercelCLI.png)

Ejecutamos el comando `vercel --prod`para desplegarlo.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/vercelCLI2.png)

El resultado es el siguiente:

Sin darle ningún valor a name:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoVercel1.png)

Pasandole el valor a name:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoVercel2.png)



