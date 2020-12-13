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

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/GET1.png)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API1.png)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API2.png)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API3.png)

Esta función está relacionada con la [HU05](https://github.com/josemip98/OrganizeUDiet/issues/53) - Como usuario debo poder añadir un producto a una dieta.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/POST.png)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API4.png)

Esta función está relacionada con la [HU03](https://github.com/josemip98/OrganizeUDiet/issues/20) - Como usuario debo poder consultar un producto concreto de una dieta.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/GET2.png)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API6.png)

Esta función está relacionada con la [HU01](https://github.com/josemip98/OrganizeUDiet/issues/9) - Como usuario debo poder consultar el listado de productos que forman una dieta.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/GET3.png)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API5.png)

Esta función está relacionada con la [HU06](https://github.com/josemip98/OrganizeUDiet/issues/54) - Como usuario debo poder modificar un producto de una dieta.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API8.png)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API9.png)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/PUT.png)

Esta función está relacionada con la [HU07](https://github.com/josemip98/OrganizeUDiet/issues/55) - Como usuario debo poder eliminar un producto de una dieta.

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/DELETE.png)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API10.png)

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/API11.png)

## Uso de buenas prácticas: configuración distribuida, logs, uso de middleware.

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
