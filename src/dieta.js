const Producto = require("../src/producto.js");

class Dieta{
  //constructor
  constructor(listaProductos){
    this.listaProductos = new Array();
    this.listaProductos = (listaProductos);
  }

 //Función para añadir un producto a una dieta
  AniadirProducto(producto, calorias, grasa, proteinas, hidratos){
    if( producto == false && informacionNutricional == false){
      throw new Error('Error inserción producto');
    }
    else{
      var productoNuevo = new Producto(producto, calorias, grasa, proteinas, hidratos);
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
