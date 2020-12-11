var request = require('supertest');
var app = require('../app');

// Ejemplo de nuevo producto
var nuevo_producto = 
    {
      "nombre": "arroz",
      "calorias": "344",
      "grasa": "1",
      "proteinas": "9",
      "hidratos": "75"
    };

// Ejemplo de modificación de producto
var modificacion =
    {
      "nombre": "arroz",
      "calorias": "1",
      "grasa": "1",
      "proteinas": "1",
      "hidratos": "1"
    };

// Hace lo mismo que GET status pero en la ruta raíz
describe( "GET home page", function() {
    it('Should get OK status', function(done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
});

// Checkea estado del microservicio
describe( "GET status", function() {
    it('Should get OK status', function(done) {
        request(app)
            .get('/status')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

// Obtiene la información de un producto concreto
describe( "GET producto", function() {
    it('Deberías obtener la información de un producto concreto', function(done) {
        request(app)
            .get('/producto/arroz')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

// Obtiene el listado de productos
describe( "GET listado de productos", function() {
    it('Deberías obtener el listado de productos', function(done) {
        request(app)
            .get('/listado')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

// Añade un nuevo producto
describe( "POST producto", function() {
    it('Debería añadir un nuevo producto', function(done) {
        request(app)
            .post('/producto')
            .send(nuevo_producto)
            .expect(201, done);
    });
});

// Modifica la información de un producto indicando su nombre y la nueva información
describe( "PUT modificación", function() {
    it('Deberias obtener la modificación del producto', function(done) {
        request(app)
            .put('/modifica')
            .send(modificacion)
            .expect(200, done);
    });
});

// Elimina un producto de una dieta indicando el nombre en el body
describe( "DELETE producto", function() {
    it('Devería eliminar el producto indicado', function(done) {
        request(app)
            .delete('/elimina')
            .send({
                "nombre":"arroz"
              })
            .expect(200, done);
    });
});
