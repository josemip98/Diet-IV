
class Producto {
	
// Constructor	
    constructor(producto, calorias, grasa, proteinas, hidratos){
        this.producto = producto;
	this.calorias = calorias;
	this.grasa = grasa;
	this.proteinas = proteinas;
	this.hidratos = hidratos;
    }
	
// Get

    get producto(){
        return this.producto;
    }

    get calorias(){
        return this.calorias;
    }

    get grasa(){
        return this.grasa;
    }

    get proteinas(){
        return this.proteinas;
    }

    get hidratos(){
        return this.hidratos;
    }
	
// Set
	
    set producto(producto){
        this.producto = producto;
    }

    set calorias(calorias){
        this.calorias = calorias;
    }

    set grasa(grasa){
        this.grasa = grasa;
    }

    set proteinas(proteinas){
        this.proteinas = proteinas;
    }

    set hidratos(hidratos){
        this.hidratos = hidratos;
    }
}

module.exports = Producto;
