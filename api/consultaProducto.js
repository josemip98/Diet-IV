const datos = require("./productos.json");
const Dieta  = require("../src/dieta.js");
const Producto = require("../src/producto.js");

module.exports = (req,res) =>{

    var {producto="ninguno"} = req.query
    var result;
    var i = 0;
    var existeProducto = false;
    var datosJSON = []
    var objeto = {}

      //Generamos los productos captando del fichero productos.json
      while( i < datos.productos.length){
        nombre= datos.productos[i]["nombre"];
        calorias= datos.productos[i]["calorias"];
        grasa= datos.productos[i]["grasa"];
        proteinas= datos.productos[i]["proteinas"];
        hidratos= datos.productos[i]["hidratos"];
        //Si existe el producto lo muestra
        if(producto == nombre){
          existeProducto = true;
          var producto = new Producto(nombre,calorias,grasa,proteinas,hidratos);

          datosJSON.push({
                  "Nombre ": producto.getNombre(),
                  "Calorias": producto.getCalorias(),
                  "Grasa": producto.getGrasa(),
                  "Proteinas": producto.getProteinas(),
                  "Hidratos": producto.getHidratos()
          });
            objeto.productos = datosJSON;
            result = JSON.stringify(objeto)
          //result = "Producto: " + nombre + ", calorias: " + calorias + ",
          // grasa: " + grasa + ", hidratos: " + hidratos + ", proteinas: "
          // + proteinas ;
        }
        // Si no hemos indicado ningún producto
        else if(producto == "ninguno"){
          clave_error = "Error";
          objeto[clave_error] = []
          mensaje_error = { error: "Debe indicar un producto" };
          result = JSON.stringify(mensaje_error)
        }
        //Si no existe el producto
        else if (existeProducto==false){
            clave_error = "Error";
            objeto[clave_error] = []
            mensaje_error = { error: "Producto no disponible." };
            result = JSON.stringify(mensaje_error)
        }
        i+=1
      }

    // Se envía el resultado
    res.status(200).send(result)

}
