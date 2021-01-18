const express = require('express')
var router = express.Router();
const app = express();
var path = require('path');
var Dieta = require('../src/dieta.js');
var Producto = require('../src/producto.js');
var dieta = new Dieta();

router.get('/', (req, res) => {
  res.send('La API OrganizeUDiet funciona correctamente!')
})

router.get('/status', (req, res) => {
  res.send("{ status: \"OK\" }");
  res.status(200);
})


router.get('/producto/:producto', function(req, res, next) {

  try {
    var producto = req.params.producto;
    var producto_final = dieta.buscarProducto(producto);
    res.status(200).json(producto_final);
  }
  catch(e) {
    throw e;
    res.send('No existe el producto.')
    res.sendStatus(404);
  }

});

router.get('/listado', function(req, res, next) {

  try {
    var productos = dieta.mostrarDieta();
    res.status(200).json(productos);
  }
  catch(e) {
    throw e;
    res.send('No hay ningún producto disponible. Debería incluir alguno.')
    res.sendStatus(404);
  }

});


router.post('/producto', function(req, res, next) {
  var body = req.body;
  var nombre = body.nombre;
  var calorias = body.calorias;
  var grasa = body.grasa;
  var proteinas = body.proteinas;
  var hidratos = body.hidratos;

  try {
    var producto = new Producto(nombre, calorias, grasa, proteinas, hidratos)
    dieta.aniadirProducto(producto);
    res.set('Location', '/producto/${producto.nombre}');
    res.sendStatus(201);
  }
  catch(e) {
    throw e;
    res.send('No se ha podido añadir el producto.')
    res.sendStatus(404);
  }

});

router.put('/producto', function(req, res, next) {
  var body = req.body;
  var nombre = body.nombre;
  var calorias = body.calorias;
  var grasa = body.grasa;
  var proteinas = body.proteinas;
  var hidratos = body.hidratos;
  try {
    var producto = dieta.modificarProducto(nombre,calorias,grasa,proteinas,hidratos);
    res.status(200).json(producto);
  }
  catch(e) {
    throw e;
    res.send('No se ha podido modificar el producto.')
    res.sendStatus(404);
  }

});

router.delete('/producto', function(req, res, next) {
  var body = req.body;
  var nombre = body.nombre;
  try {
    dieta.eliminarProducto(nombre);
    res.sendStatus(200);
  }
  catch(e) {
    throw e;
    res.send('No se ha podido eliminar el producto.')
    res.sendStatus(404);
  }

});

router.get('/ordenaAlfabeticamente/:orden', function(req, res, next) {
  var body = req.body;
  var orden = body.orden;
  if((orden=="ascendente")||(orden=="descendente")) {
    dieta.ordenarProductos(orden);
    res.sendStatus(200);
  }
  else{
    res.send('No se han podido ordenar los productos.')
    res.sendStatus(404);
  }
});

router.get('/ordena/:orden', function(req, res, next) {
  var body = req.body;
  var orden = body.orden;
    if((orden=="grasa")||(orden=="hidratos")||(orden=="proteinas")||(orden=="calorias")){
    dieta.ordenarProductosAlfabeticamente(orden);
    res.sendStatus(200);
  }
  else{
    res.send('No se han podido ordenar productos.')
    res.sendStatus(404);
  }
});

module.exports = router;
