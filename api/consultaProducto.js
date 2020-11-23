const datos = require("./productos.json");
const Dieta  = require("../src/dieta.js");
const Producto = require("../src/producto.js");

module.exports = (req,res) =>{

    //Captaremos de la URL el producto del que queremos consultar la informacion nutricional
    //Si no obtenemos ningun por defecto valor "Vacio" para generar el resultado correspondiente

    var {producto="Vacio"} = req.query
    var result;
    var dieta = new Dieta();
    var i = 0;

    var datosJSON = []
    var objetoJSON = {}

    if(producto == "arroz" || producto=="macarrones" || producto=="atun"){
      //Generamos los productos captando del fichero data.js para añadirlas a la dieta
      while( i < datos.productos.length){
          nombre= datos.productos[i]["nombre"];
          calorias= datos.productos[i]["calorias"];
    	    grasa= datos.productos[i]["grasa"];
  	      proteinas= datos.productos[i]["hidratos"];
  	      hidratos= datos.productos[i]["proteinas"];
          i+=1
          var pro = new Producto(nombre, calorias, grasa, proteinas, hidratos);
          datosJSON.push({
            pro.getProducto()
          });
      }

        });
        // FORMAMOS EL JSON
        objetoJSON.productos = datosJSON;
        result = JSON.stringify(objetoJSON)

    }
    //Si es Vacio significa que no se ha recibido nada
    else if(producto == "Vacio"){
        result="Debe indicar un producto";
    }
    else{
        result="Producto no disponible. Los productos disponibles por el momento son: arroz macarrones atun";

    }


    // Se envía el resultado
    res.status(200).send(result)

}
