
class Producto {
    constructor(producto, marca, calorias, grasa, proteinas, hidratos){
        this.producto = producto;
	this.marca = marca;
	this.calorias = calorias;
	this.grasa = grasa;
	this.proteinas = proteinas;
	this.hidratos = hidratos;
    }

    mostrarProducto(){
        return this.producto;
    }

    mostrarMarca(){
        return this.marca;
    }

    mostrarCalorias(){
        return this.calorias;
    }

    mostrarGrasa(){
        return this.grasa;
    }

    mostrarProteinas(){
        return this.proteinas;
    }

    mostrarHidratos(){
        return this.hidratos;
    }
}
