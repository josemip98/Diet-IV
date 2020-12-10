const express = require('express')
var router = express.Router();
const app = express();
var path = require('path');

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

module.exports = router;
