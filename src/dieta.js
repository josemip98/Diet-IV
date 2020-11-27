const Producto = require("../src/producto.js");

class Dieta{
  //constructor
  constructor(){
    this.listaProductos = new Array();
  }

 //Función para añadir un producto a una dieta
  AniadirProducto(producto){
    if(producto == false){
      throw new Error('Error inserción producto');
    }
    else{
      this.listaProductos.push(productoNuevo);
    }
  }
 //Función para mostrar productos que forman la dieta
  MostrarDieta(){
    var mostrarDieta = new Array();
    for(var i in this.listaProductos){
      mostrarDieta.push(this.listaProductos[i] + "\n ");
    }
    return mostrarDieta;
  }
  //Función para mostrar un producto concreto junto con su información nutricional
  mostrarProducto(producto){
    var encontrado = 0;
    var productoEncontrado;
    var indice;
    for(var i in this.listaProductos){
      if(producto.toUpperCase() == this.listaProductos[i]){
        encontrado++;
        indice = i;
        }
      }

      if(encontrado > 0){
        productoEncontrado = this.listaProductos[indice].getProducto()+ " \n";
      }

      return productoEncontrado;
    }
  }

module.exports = Dieta;
