const Producto = require("../src/producto.js");

class Dieta{
  //constructor
  constructor(){
    this.listaProductos = new Array();
  }

 //Función para añadir un producto a una dieta
  aniadirProducto(producto){
    if(producto == false){
      throw new Error('Error inserción producto');
    }
    else{
      this.listaProductos.push(producto);
    }
  }
 //Función para mostrar productos que forman la dieta
  mostrarDieta(){
    var mostrarDieta = new Array();
    for(var i in this.listaProductos){
      mostrarDieta.push(this.listaProductos[i].getProducto() + "\n ");
    }
    return mostrarDieta;
  }
  //Función para mostrar un producto concreto junto con su información nutricional
  mostrarProducto(producto){
    var encontrado = 0;
    var productoEncontrado;
    var indice;
    for(var i in this.listaProductos){
      if(producto == this.listaProductos[i].getNombre()){
        encontrado++;
        indice = i;
        }
      }

      if(encontrado > 0){
        productoEncontrado = this.listaProductos[indice];
      }

      return productoEncontrado;
    }
  }

module.exports = Dieta;
