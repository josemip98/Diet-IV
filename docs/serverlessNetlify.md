
# Despliegue funciones serverless en GitHub con Netlify

Primero me he dado de alta y he enlazado mi repositorio de GitHub, [aquí](https://github.com/josemip98/EjerciciosIV/tree/master/Tema%206%20-%20Serverless#ejercicio-3) se puede comprobar en el ejercicio de autoevaluación y la prueba básica que realizé.

Para que no se quedará en una simple prueba de una función básica he decidido implementar una función llamada listadoProductos relacionada con la [HU04](https://github.com/josemip98/OrganizeUDiet/issues/44) con la que puedo consultar el listado completo de productos disponibles junto con su información nutricional.

Después he creado el archivo [netlify.toml](https://github.com/josemip98/OrganizeUDiet/blob/master/netlify.toml) donde indicaremos el directorio [functions](https://github.com/josemip98/OrganizeUDiet/tree/master/functions) donde se encuentran las funciones de netlify.

En dicho directorio podemos encontrar el fichero [productos.json](https://github.com/josemip98/OrganizeUDiet/blob/master/functions/productos.json) en el que tenemos la lista de productos y el archivo [listadoProductos](https://github.com/josemip98/OrganizeUDiet/blob/master/functions/listadoProductos.js) en el que tenemos la función.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/listado.png)

Primero hago los require de mi fichero de datos productos.json y las clases dieta y producto. La función lo que hace es leer del fichero productos.json todos los productos y crea una variable producto para cada uno y los incluye en una variable dieta con la función aniadirProducto(producto).

Despues a la variable result que es la que devolverá la función le asigno el resultado de la función mostrarDieta() de la clase dieta que devuelve todos los productos, para cada uno muestra su nombre y su información nutricional.

Desplegamos el proyecto con los comandos:

`netlify deploy`

`netlify deploy --prod`

+ [Enlace de la función](https://laughing-ramanujan-50249a.netlify.app/.netlify/functions/listadoProductos)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/despliegueNetlify.png)

Y los resultados son los siguientes:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/resultadoNetlify.png)
