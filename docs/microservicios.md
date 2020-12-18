# Microservicios

## Justificación técnica del framework elegido para el microservicio

### Express js

Tras consultar varias páginas como [esta](https://www.simform.com/best-nodejs-frameworks/) acercade los distintos frameworks que hay disponibles para node js, me he decidido por utilizar **Express js**.

Express, encabeza la lista de los mejores marcos de Node.js siendo el más utilizado.

![uso frameworks](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/useFrameworks.png)

Sobretodo me he decantado por Express porque no requiere que se adentre más en la curva de aprendizaje; en su lugar, basta con una comprensión básica del entorno de Node.js y las habilidades de programación. Su arquitectura rápida, robusta y asincrónica se adapta bien a Node. Por eso mi decisión ya que necesito que sea fácil de comenzar a trabajar para la realización de mi proyecto y pienso que la mejor opción es esta.

Esta es su [pagina web](https://expressjs.com/es/) y este su [GitHub](https://github.com/expressjs/express).

### Ventajas de usar Express js:

+ Paquetes de programación rápida del lado del servidor: el marco tiene muchas características de Node.js como funciones y acelera el proceso con pocas líneas de código.

+ Alto rendimiento: varias operaciones se ejecutan de forma independiente entre sí mediante programación asincrónica

+ La cobertura de prueba súper alta ayuda a crear aplicaciones con la máxima capacidad de prueba.
Una gran cantidad de ayudantes HTTP: hacen que los programas sean más inteligibles y reutilizables.

+ Mejor negociación de contenido: esto ayuda a mejorar la comunicación entre el cliente y el servidor al proporcionar encabezados HTTP a las URL, que obtienen la información exacta para los usuarios / cliente.

+ Patrón arquitectónico MVC

### Otras alternativas:

Para Node js encontramos muchos frameworks, los más utilizados son los siguientes:

+ Sails
+ Koa
+ Hapi
+ Restify


## Diseño (rutas, tipos devueltos,estados), implementación y diseño por capas

### Rutas

[Archivo](https://github.com/josemip98/OrganizeUDiet/blob/master/routes/index.js) con todas las rutas.

Primero he creado las rutas / y /status que mostrarán un mensaje de bienvenida que nos indica que la API esta funcionando correctamente.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/GET1.png)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API1.png)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API2.png)

Después con la ruta /listado que explicaré más adelante comprobamos que la dieta no contiene ningún producto.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API3.png)

Esta función está relacionada con la [HU05](https://github.com/josemip98/OrganizeUDiet/issues/53) - Como usuario debo poder añadir un producto a una dieta.

Mediante la ruta /aniade, realizamos una petición POST con el nombre, calorias,grasa,proteinas e hidratos en el body del mensaje para añadir un nuevo producto. Para ello utilizamos el constructor de la clase Producto para crearlo y lo añadimos a la dieta con la función aniadirProducto(producto). Devolvemos el código 200 si se ha realizado con éxito o el mensaje no se ha podido añadir el producto y el código 404 si no se ha podido realizar.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/POST.png)

Realizamos la peticion POST y vemos que se realiza correctamente.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API4.png)

Esta función está relacionada con la [HU03](https://github.com/josemip98/OrganizeUDiet/issues/20) - Como usuario debo poder consultar un producto concreto de una dieta.

Mediante la ruta /producto/<nombre_producto> podemos consultar la información de un producto concreto de una dieta. Para ello recojo el nombre del producto de la url con req.params.producto y lo busco con la función buscarProducto(producto) de la clase dieta.
Si se ha encontrado nos lo devolverá en formato JSON junto con el código de éxito 200. Por el contrario si no se ha encontrado, nos devolverá el código de error 404 y nos indicará que no existe el producto.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/GET2.png)

Vemos como nos muestra el producto arroz que habíamos añadido anteriormente.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API6.png)

Esta función está relacionada con la [HU01](https://github.com/josemip98/OrganizeUDiet/issues/9) - Como usuario debo poder consultar el listado de productos que forman una dieta.

Mediante la ruta /listado podemos consultar todos los productos que forman una dieta. Para ello utilizamos la función  mostrarDieta() de la clase Dieta que nos devolverá un array de productos.
Nos devolverá el array de productos en formato JSON junto con el código de éxito 200.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/GET3.png)

Utilizé el métodod POST para añadir los producto atún y arroz y vemos como se muestran correctamente.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API5.png)

Esta función está relacionada con la [HU06](https://github.com/josemip98/OrganizeUDiet/issues/54) - Como usuario debo poder modificar un producto de una dieta.

Mediante la ruta /modifica, realizamos una petición PUT con el nombre, calorias, grasa, proteinas e hidratos en el body del mensaje para modificar el producto indicado con el nombre. Para ello utilizamos la función modificarProducto(nombre,calorias,grasa,proteinas,hidratos) de la clase dieta. Devolvemos el código 200 si se ha realizado con éxito y el producto modificado en formato JSON o el mensaje: no se ha podido añadir el producto y el código 404 si no se ha podido realizar.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/PUT.png)

Vemos como la petición se realiza con éxito.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API8.png)

Y si buscamos el producto modificado vemos que efectivamente hemos modificado la información nutricional del producto. 

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API9.png)

Esta función está relacionada con la [HU07](https://github.com/josemip98/OrganizeUDiet/issues/55) - Como usuario debo poder eliminar un producto de una dieta.

Mediante la ruta /elimina podemos eliminar un producto concreto de una dieta. Para ello recojo el nombre del producto incluido en el body del mensaje y lo elimino con la función eliminarProducto(producto) de la clase dieta.
Si se ha eliminado nos devolverá el código de éxito 200. Por el contrario si no se ha encontrado, nos devolverá el código de error 404 y nos indicará que no se ha podido eliminar el producto.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/DELETE.png)

Vemos que la petición DELETE se ha realizado correctamente.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API10.png)

Y si utilizamos la ruta /listado podemos comprobar como el producto arroz ya no aparece ya que ha sido eliminado.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API11.png)

## Uso de buenas prácticas: configuración distribuida, logs, uso de middleware.

### Configuración distribuida

Como configuración distribuida siguiendo buenas prácticas de Express creamos las distintas rutas en la carpeta routes en el archivo [index.js](https://github.com/josemip98/OrganizeUDiet/blob/master/routes/index.js), las clases para las funciones utilizadas se encuentran en la carpeta src, estas son la clase [Producto](https://github.com/josemip98/OrganizeUDiet/blob/master/src/producto.js) y clase [Dieta](https://github.com/josemip98/OrganizeUDiet/blob/master/src/dieta.js).

### Log

Para el log utilizo **Morgan** que es un moddleware para capturar solicitudes HTTP para Node.js y así mostrar por pantalla el registro de dichas solicitudes.

Para ello creo una variable logger mediante el paquete morgan, indico la direccion del router con la variable indexRouter en app use('/', indexRouter) con el valor del fichero index.js contenido en la carpeta routes.

Para el manejo de errores creo una función middleware en la que se necesitan 4 argumentos (err,req,res,next) y se devuelve el error 500 y el mensaje de error. He seguido la documentacion oficial de [express](https://expressjs.com/es/guide/error-handling.html)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/middleware1.png)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/logAPI.png)

### Middleware

Express es una infraestructura web de direccionamiento y middleware que tiene una funcionalidad mínima propia.

He utilizado Middleware de nivel de direccionador:
El middleware de nivel de direccionador funciona de la misma manera que el middleware de nivel de aplicación, excepto que está enlazado a una instancia de express.Router().

Cargué el middleware de nivel de direccionador utilizando las funciones router.use() y router.METHOD().

El siguiente código muestra el sistema de middleware que se ha mostrado anteriormente para el middleware de direccionador en el que como he explicado antes utilizo el paquete de express.Router(), con las llamadas router.get, router.post, router.put y router.delete:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/middleware.png)

Puede verse el archivo completo [aquí](https://github.com/josemip98/OrganizeUDiet/blob/master/routes/index.js)

## Tests correctos y de acuerdo con las historias de usuario.

### GET

Para testear el buen funcionamiento de las peticiones de tipo GET se ha realizado lo siguiente:

GET / y GET Status
Estos son un ejemplo de test creado para el decorador que envía una respuesta de éxito si se accede a la ruta /status o la ruta principal / y el microservicio se ha desplegado correctamente. La petición sobre la aplicación (request(app)) es de tipo get a la ruta /status, por eso se incluye .get('/status); por otro lado, como lo que se espera es un JSON, se indica con .expect('Content-Type', /json/); por último, para comprobar que el código recibido es de éxito, se añade .expect(200, done).

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/testGET1.png)

GET producto
En este caso vemos cómo se indican parámetros en la ruta de la petición para aquellos casos en los que sea necesario, simplemente añadimos los valores con los que queramos testear la API Rest, como en este caso veriamos la información del producto arroz: .get('/producto/arroz')

Este test está relacionado con la [HU03](https://github.com/josemip98/OrganizeUDiet/issues/20) - Como usuario debo poder consultar un producto concreto de una dieta.

GET listado de productos
En este caso podemos ver el listado de productos disponibles con: .get('/listado')

Este test está relacionado con la [HU01](https://github.com/josemip98/OrganizeUDiet/issues/9) - Como usuario debo poder consultar el listado de productos que forman una dieta.

En la siguiente imagen se encuentan los tests de ambos:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/testGET2.png)

### POST

Ahora, veamos cómo se realiza una petición de tipo POST. En general, el esquema es igual que el de las peticiones de tipo GET mostradas previamente, lo único que cambia es el tipo de petición y la ruta: .post('/aniade'), y que tenemos que enviar el body de dicha petición. Para esto último, usamos .send(nuevo_producto):

Este test está relacionado con la [HU05](https://github.com/josemip98/OrganizeUDiet/issues/53) - Como usuario debo poder añadir un producto a una dieta.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/testPOST.png)

### PUT

En el caso de las peticiones de tipo PUT, lo que tenemos que indicar es .put(<ruta>), el resto coindice con lo explicado anteriormente:

Este test está relacionado con la [HU06](https://github.com/josemip98/OrganizeUDiet/issues/54) - Como usuario debo poder modificar un producto de una dieta.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/testPUT.png)

### DELETE

En el caso de las peticiones de tipo DELETE, a diferencia de las anteriores, lo que tenemos que indicar es .delete(<ruta>) y el body de la petición .send(<body>):

Este test está relacionado con la [HU07](https://github.com/josemip98/OrganizeUDiet/issues/55) - Como usuario debo poder eliminar un producto de una dieta.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/testDELETE.png)
