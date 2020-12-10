const Producto = require("../src/producto.js");

class Dieta{
  //constructor
  constructor(nombre_dieta, path_db){
    this.path = path_db
    this.fs = require('fs')

         // Si no existe el archivo de integrantes, lo creamos inicianizándolo
         if (!this.fs.existsSync(this.path)) {
             var json = JSON.stringify(JSON.parse("[]"), null, 2);
             this.fs.writeFileSync(this.path,json,'utf8',function(err){
                 if(err) {
                     throw err;
                 }
             });
         }

         // Si sí que existe el archivo simplemente lo abrimos y lo leemos.
         else {
             this.data = this.fs.readFileSync(this.path,'utf8',function(err){
                 if(err) {
                     throw err;
                 }
             });

             // Si al leer el archivo, está vacío, lo inicializamos
             if (this.data === ""){
                 var json = JSON.stringify(JSON.parse("[]"), null, 2);
                 this.fs.writeFileSync(this.path,json,'utf8',function(err){
                     if(err) {
                         throw err;
                 }
                 });
             }

             // Inicializamos los atributos de la clase en base a si ya hay información
             // en el archivo de productos o no
             var obj = JSON.parse(this.data);
             // Comprobamos las parejas que ya se encuentran en el archivo y actualizamos
             // las plazas disponibles
         }

         this.data = this.fs.readFileSync(this.path,'utf8',function(err){
             if(err) {
                 throw err;
             }
         });
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
