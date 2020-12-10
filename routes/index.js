const express = require('express')
var router = express.Router();
const app = express();
var path = require('path');
var Dieta = require('../src/dieta.js');
var Producto = require('../src/producto.js');
var dieta = new Dieta(path.join(__dirname, "../api/data/productos.json"));

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

router.get('/producto/:producto', function(req, res, next) {

  try {
    var producto = req.params.producto;
    var producto_final = dieta.buscarProducto(producto);
    res.status(200).json(producto_final);
  }
  catch(e) {
    throw e;
  }

});

module.exports = router;
