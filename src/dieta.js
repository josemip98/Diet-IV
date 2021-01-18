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

  //Función para modificar un producto de una dieta
   modificarProducto(nombre,calorias,grasa,proteinas,hidratos){
     var encontrado = false;
     var indice;
     for(var i in this.listaProductos){
       if(nombre == this.listaProductos[i].getNombre() && encontrado==false){
         encontrado = true;
         indice = i;
       }
     }
    if(encontrado == true){
      this.listaProductos[i].nombre = nombre;
      this.listaProductos[i].calorias = calorias;
      this.listaProductos[i].grasa = grasa;
      this.listaProductos[i].proteinas = proteinas;
      this.listaProductos[i].hidratos = hidratos;

      return this.listaProductos[i];
    }
    else{
      return ("No se ha podido modificar el producto")
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

  //Función que ordena los productos alfabeticamente de manera ascendente y descendente
    ordenarProductosAlfabeticamente(orden){
      var orden = orden;
      var dieta = {};
      var i = 0;
      var lista_ordenados = new Array();
      var lista_desordenados = new Array();
      var lista_productos =new Array();
      while (i < this.listaProductos.length){
        lista_productos[i] = this.listaProductos[i].getProducto();
        dieta[this.listaProductos[i].getProducto()] = this.listaProductos[i].getNombre();
        i+=1;
      }
      if(orden == "ascendente"){
        lista_ordenados = lista_productos.sort();
      }
      else if(orden == "descendente"){
        lista_desordenados = lista_productos.sort();
        lista_ordenados = lista_desordenados.reverse();
      }else{
        return ("El valor introducido no es válido. Introduce ascendente o descendente");
      }
      var j = 0;
      for(var producto in lista_ordenados){
        this.listaProductos[j].setProducto(lista_ordenados[producto])
        j+=1
      }
        return this.listaProductos;
    }

    //Función que ordena los productos según mayor número de hidratos, grasa, proteinas o calorias.
      ordenarProductos(orden){
        var orden = orden;
        var dieta = {};
        var i = 0
        var lista_ordenados = new Array();
        var lista_productos =new Array();
        if(orden == "hidratos"){
          while (i < this.listaProductos.length){
            lista_productos[i] = this.listaProductos[i].getProducto();
            dieta[this.listaProductos[i].getProducto()] = this.listaProductos[i].getHidratos();
            i+=1;
          }
          lista_ordenados = lista_productos.sort();
        }
        else if(orden == "grasa"){
          while (i < this.listaProductos.length){
            lista_productos[i] = this.listaProductos[i].getProducto();
            dieta[this.listaProductos[i].getProducto()] = this.listaProductos[i].getGrasa();
            i+=1;
          }
          lista_ordenados = lista_productos.sort();
        }else if(orden == "proteinas"){
          while (i < this.listaProductos.length){
            lista_productos[i] = this.listaProductos[i].getProducto();
            dieta[this.listaProductos[i].getProducto()] = this.listaProductos[i].getProteinas();
            i+=1;
          }
          lista_ordenados = lista_productos.sort();
        }else if(orden == "calorias"){
          while (i < this.listaProductos.length){
            lista_productos[i] = this.listaProductos[i].getProducto();
            dieta[this.listaProductos[i].getProducto()] = this.listaProductos[i].getCalorias();
            i+=1;
          }
          lista_ordenados = lista_productos.sort();
        }else{
          return ("El valor introducido no es válido. Introduce hidratos, grasa, proteinas o calorias");
        }
        var j = 0;
        for(var producto in lista_ordenados){
          this.listaProductos[j].setProducto(lista_ordenados[producto])
          j+=1
        }
          return this.listaProductos;
      }
}
module.exports = Dieta;
