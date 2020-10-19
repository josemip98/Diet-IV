
class Dieta{

  //constructor
  constructor(listaProductos, informacionNutricional){
    this.listaProductos = new Array();
    this.informacionNutricional = new Array();
    this.listaProductos = (listaProductos);
    this.informacionNutricional = (informacionNutricional);
  }

  AniadirProducto(listaProductos, informacionNutricional){
    if( listaProductos == false && informacionNutricional == false){
      throw new Error('Error inserción producto');
    }
    else{
      this.listaProductos.push(listaProductos);
      this.informacionNutricional.push(informacionNutricional);
    }
  }

  MostrarDieta(){
    var mostrarDieta = new Array();
    for(var i in this.listaProductos){
      mostrarDieta.push(this.listaProductos+" : " + this.informacionNutricional);
    }
    return mostrarDieta;
  }

}

module.exports = Dieta;

