const Dieta = require("./dieta.js");
const Producto = require("./producto.js");

class Controlador {

    constructor(){
      this.dieta = new Dieta();
    }

   mostrarDieta(){
     var productos = this.dieta.mostrarDieta();
     return productos;
   }

   listadoProductos(){
     var listado = this.dieta.mostrarDieta();
     return listado;
   }

}
