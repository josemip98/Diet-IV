const Producto = require("../src/producto.js");

class Dieta{
  //constructor
  constructor(){
    this.listaProductos = new Array();
  }

 //Función para añadir un producto a una dieta
  aniadirProducto(producto){
    if(producto == false){
      throw new Error('Error inserción del producto');
    }
    else{
      this.listaProductos.push(producto);
    }
  }

  //Función para eliminar un producto de una dieta
   eliminarProducto(producto){
     var encontrado = false;
     var indice;
     for(var i in this.listaProductos){
       if(producto == this.listaProductos[i].getNombre()){
         encontrado = true;
         indice = i;
       }
     }
    if(encontrado == true){
      var eliminado = this.listaProductos.splice(indice,1);
    }
   }

 //Función para mostrar productos que forman la dieta
  mostrarDieta(){
    var mostrarDieta = new Array();
    for(var i in this.listaProductos){
      mostrarDieta.push(this.listaProductos[i]);
    }
    return mostrarDieta;
  }
  //Función para mostrar un producto concreto junto con su información nutricional
  buscarProducto(producto){
    var encontrado = false;
    var productoEncontrado;
    var indice;
    for(var i in this.listaProductos){
      if(producto == this.listaProductos[i].getNombre()){
        encontrado = true;
        indice = i;
        }
      }

      if(encontrado == true){
        productoEncontrado = this.listaProductos[indice];
      }

      return productoEncontrado;
    }
  }

module.exports = Dieta;
