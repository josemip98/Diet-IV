
class Dieta{

  constructor(listaProductos){
    listaProductos = new Array();
  }
  
  AniadirProducto(producto){
    if( producto == true){
      throw new Error('Error inserción producto');
    }
    else{
      this.listaProductos.push(producto);
    }
  }
  
  MostrarDieta(){
    for(var i in this.listaProductos){
      console.log(this.listaProductos[i]);
    }
  }
  
}

module.exports = Dieta;
