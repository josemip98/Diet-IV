const datos = require("./productos.json");
const Dieta  = require("../src/dieta.js");
const Productos = require("../src/producto.js");

module.exports = (req,res) =>{

    //Captaremos de la URL el producto del que queremos consultar la informacion nutricional
    //Si no obtenemos ningun por defecto valor "Vacio" para generar el resultado correspondiente

    const{producto="Vacio"} = req.query
    var result;
    var catalogo = new Catalogo();
    var i = 0;

    //Generamos los productos captando del fichero data.js para añadirlas al catalogo
    while( i < data.data.length){
        nombre= data.data[i]['Nombre'];
        sinopsis= data.data[i]["Sinopsis"];
  
        num_temporadas = data.data[i]["Numero Temporadas"];
        gen = data.data[i]["Genero"];
        i+=1
        var serie = new Serie(nombre,sinopsis,num_temporadas,gen)
        catalogo.aniadirSerie(serie)

    }

    var datosJSON = []
    var objetoJSON = {}

    if(producto == "arroz" || producto=="macarrones" || producto=="atun"){
        var productosNombre = Dieta.mostrarProducto(producto)
        
        productosNombre.forEach(element => {
            datosJSON.push({
                element.getProducto()
            });
            
        });
        // FORMAMOS EL JSON
        objetoJSON.productos = datosJSON;
        result = JSON.stringify(objetoJSON)
        
    }
    //Si es Vacio significa que no se ha recibido nada
    else if(genero == "Vacio"){
        result="Debe indicar un producto";
    }
    else{
        result="producto no disponible. Los productos disponibles por el momento son: arroz macarrones atun";

    }


    // Se envía el resultado
    res.status(200).send(result)

}
