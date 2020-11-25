const datos = require("./productos.json");
const Dieta  = require("../src/dieta.js");
const Producto = require("../src/producto.js");

exports.handler = async event =>{

    var i = 0;
    var result = ""
    while( i < datos.productos.length){
      nombre= datos.productos[i]["nombre"];
      calorias= datos.productos[i]["calorias"];
      grasa= datos.productos[i]["grasa"];
      proteinas= datos.productos[i]["proteinas"];
      hidratos= datos.productos[i]["hidratos"];
      i+=1
      result += "Producto: " + nombre + ", calorias: " + calorias + ", grasa: " + grasa + ", hidratos: " + hidratos + ", proteinas: " + proteinas + "\n";
    }

  // Se envía el resultado
  return{
    statusCode:200,
    body: result.toString()
  }
}
