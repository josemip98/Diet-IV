const express = require('express')
var router = express.Router();
const app = express();
var path = require('path');
var Dieta = require('../src/dieta.js');
var Producto = require('../src/producto.js');
var dieta = new Dieta();

var producto = new Producto("arroz","1","1","1","1");
dieta.aniadirProducto(producto);
var producto = new Producto("macarrones","1","1","1","1");
dieta.aniadirProducto(producto);

router.get('/', (req, res) => {
  res.send('La API OrganizeUDiet funciona correctamente!. Consulta /status para ver un ejemplo de uso.')
})

router.get('/status', function(req, res, next) {
  var ejemplo = {
    "status":"OK",
    "producto":
    {
      "nombre": "arroz",
      "calorias": "344",
      "grasa": "1",
      "proteinas": "9",
      "hidratos": "75"
    }
  }
  res.status(200).json(ejemplo);
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
    res.sendStatus(201);
  }
  catch(e) {
    throw e;
  }

});

module.exports = router;
