
class Producto {

// Constructor
    constructor(nombre, calorias, grasa, proteinas, hidratos){
        this.nombre = nombre;
				this.calorias = calorias;
				this.grasa = grasa;
				this.proteinas = proteinas;
				this.hidratos = hidratos;
    }

// Get

    getProducto(){
      var product = "\nProducto -> " + this.nombre + "\nInformación nutricional: \nCalorias -> " + this.calorias + "\nGrasa -> " + this.grasa + "\nProteinas -> " + this.proteinas + "\nHidratos -> " + this.hidratos;
      return product;
    }

    getNombre(){
        return this.nombre;
    }

    getCalorias(){
        return this.calorias;
    }

    getGrasa(){
        return this.grasa;
    }

    getProteinas(){
        return this.proteinas;
    }

    getHidratos(){
        return this.hidratos;
    }

// Set

    setProducto(producto){
        this.producto = producto;
    }

    setCalorias(calorias){
        this.calorias = calorias;
    }

    setGrasa(grasa){
        this.grasa = grasa;
    }

    setProteinas(proteinas){
        this.proteinas = proteinas;
    }

    setHidratos(hidratos){
        this.hidratos = hidratos;
    }
}

module.exports = Producto;
