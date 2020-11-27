const datos = require("./productos.json");
const Dieta  = require("../src/dieta.js");
const Producto = require("../src/producto.js");

exports.handler = async event =>{

    var i = 0;
    var result = ""
    var dieta = new Dieta();
    var datosJSON = []
    var objetoJSON = {}
    while( i < datos.productos.length){
      nombre= datos.productos[i]["nombre"];
      calorias= datos.productos[i]["calorias"];
      grasa= datos.productos[i]["grasa"];
      proteinas= datos.productos[i]["proteinas"];
      hidratos= datos.productos[i]["hidratos"];
      i+=1
      var producto = new Producto(nombre,calorias,grasa,proteinas,hidratos);
      if(producto != undefined){
        dieta.AniadirProducto(producto);
      }
    }

    result = dieta.mostrarDieta();
  // Se envía el resultado
  return{
    statusCode:200,
    body: result.toString()
  }
}
