const datos = require("./productos.json");
const Dieta  = require("../src/dieta.js");
const Producto = require("../src/producto.js");

module.exports = (req,res) =>{

    // Captaremos de la URL el producto del que queremos consultar la
    // informacion nutricional
    // Si no obtenemos ningun por defecto valor "Vacio" para generar
    // el resultado correspondiente

    var {producto="Vacio"} = req.query
    var result;
    var i = 0;
    var existeProducto = false;
    var datosJSON = []
    var objetoJSON = {}

      //Generamos los productos captando del fichero productos.json
      while( i < datos.productos.length){
        nombre= datos.productos[i]["nombre"];
        calorias= datos.productos[i]["calorias"];
        grasa= datos.productos[i]["grasa"];
        proteinas= datos.productos[i]["proteinas"];
        hidratos= datos.productos[i]["hidratos"];

        //Si existe el producto lo muestra
        if(producto == nombre || producto.toUpperCase() == nombre){
          existeProducto = true;
          datosJSON.push({
                "Nombre ": nombre,
                "Calorias": calorias,
                "Grasa": grasa,
                "Proteinas": proteinas,
                "Hidratos": hidratos
            });
            objetoJSON.productos = datosJSON;
            result = JSON.stringify(objetoJSON)
          //result = "Producto: " + nombre + ", calorias: " + calorias + ",
          // grasa: " + grasa + ", hidratos: " + hidratos + ", proteinas: "
          // + proteinas ;
        }
        //Si es Vacio significa que no se ha recibido nada
        else if(producto == "Vacio"){
            result="Debe indicar un producto";
        }
        //Si no existe el producto
        else if (existeProducto==false){
            result="Producto no disponible. Los productos disponibles por el momento son: arroz macarrones atun";
        }
        i+=1
      }

    // Se envía el resultado
    res.status(200).send(result)

}
