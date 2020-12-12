# Microservicios

## Justificación técnica del framework elegido para el microservicio

## Diseño (rutas, tipos devueltos,estados), implementación y diseño por capas

## Uso de buenas prácticas: configuración distribuida, logs, uso de middleware.

### Configuración distribuida

### Logs

### Middleware

## Tests correctos y de acuerdo con las historias de usuario.

### GET

Para testear el buen funcionamiento de las peticiones de tipo GET se ha realizado lo siguiente:

GET / y GET Status
Estos son un ejemplo de test creado para el decorador que envía una respuesta de éxito si se accede a la ruta /status o la ruta principal / y el microservicio se ha desplegado correctamente. La petición sobre la aplicación (request(app)) es de tipo get a la ruta /status, por eso se incluye .get('/status); por otro lado, como lo que se espera es un JSON, se indica con .expect('Content-Type', /json/); por último, para comprobar que el código recibido es de éxito, se añade .expect(200, done).

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/testGET1.png)

GET producto
En este caso vemos cómo se indican parámetros en la ruta de la petición para aquellos casos en los que sea necesario, simplemente añadimos los valores con los que queramos testear la API Rest, como en este caso veriamos la información del producto arroz: .get('/producto/arroz')

GET listado de productos
En este caso podemos ver el listado de productos disponibles con: .get('/listado')

En la siguiente imagen se encuentan los tests de ambos:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/testGET2.png)

### POST

Ahora, veamos cómo se realiza una petición de tipo POST. En general, el esquema es igual que el de las peticiones de tipo GET mostradas previamente, lo único que cambia es el tipo de petición y la ruta: .post('/aniade'), y que tenemos que enviar el body de dicha petición. Para esto último, usamos .send(nuevo_producto):

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/testPOST.png)

### PUT

En el caso de las peticiones de tipo PUT, lo que tenemos que indicar es .put(<ruta>), el resto coindice con lo explicado anteriormente:

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/testPUT.png)

### DELETE

En el caso de las peticiones de tipo DELETE, a diferencia de las anteriores, lo que tenemos que indicar es .delete(<ruta>) y el body de la petición .send(<body>):

![imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/testDELETE.png)
