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

   buscarProducto(producto){
     var producto = this.dieta.buscarProducto(producto);
     return producto;
   }

   buscarProductoSimilar(producto){
     var producto = this.dieta.buscarProductoSimilar(producto);
     return producto;
   }
}
