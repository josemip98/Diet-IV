const datos = require("./productos.json");
const Dieta  = require("../src/dieta.js");
const Producto = require("../src/producto.js");

function listadoProductos(){

    var i = 0;
    var result = ""
    var dieta = new Dieta();
    while( i < datos.productos.length){
      nombre= datos.productos[i]["nombre"];
      calorias= datos.productos[i]["calorias"];
      grasa= datos.productos[i]["grasa"];
      proteinas= datos.productos[i]["proteinas"];
      hidratos= datos.productos[i]["hidratos"];
      i+=1
      var producto = new Producto(nombre,calorias,grasa,proteinas,hidratos);
      dieta.aniadirProducto(producto);
    }
    result = dieta.mostrarDieta();

    return result
}

function consultaProducto(producto){

    var i = 0;
    var result = "";
    var existeProducto = false;

    while(i < datos.productos.length){
      nombre= datos.productos[i]["nombre"];
      calorias= datos.productos[i]["calorias"];
      grasa= datos.productos[i]["grasa"];
      proteinas= datos.productos[i]["proteinas"];
      hidratos= datos.productos[i]["hidratos"];

      if(producto == nombre){
        existeProducto = true;
        result = "Producto: " + nombre + ", calorias: " + calorias + ", grasa: " + grasa + ", hidratos: " + hidratos + ", proteinas: " + proteinas + "\n";
      }

      else if(producto == " "){
          result="Debe indicar un producto";
      }
      else if (existeProducto == false){
          result="Producto no disponible.";
      }
      i+=1
    }

    return result
}

module.exports = { listadoProductos, consultaProducto };
