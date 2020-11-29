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
    var dieta = new Dieta();

      //Generamos los productos captando del fichero productos.json
      while( i < datos.productos.length){
        var prod = new Producto(datos.productos[i].nombre,datos.productos[i].calorias,datos.productos[i].grasa,datos.productos[i].proteinas,datos.productos[i].hidratos);
        dieta.aniadirProducto(prod);
        //Si existe el producto lo muestra
        if(dieta.mostrar(prod)){
          existeProducto = true;

          datosJSON.push({
                  "Nombre ": prod.getNombre(),
                  "Calorias": prod.getCalorias(),
                  "Grasa": prod.getGrasa(),
                  "Proteinas": prod.getProteinas(),
                  "Hidratos": prod.getHidratos()
          });
            objeto.productos = datosJSON;
          //result = "Producto: " + nombre + ", calorias: " + calorias + ",
          // grasa: " + grasa + ", hidratos: " + hidratos + ", proteinas: "
          // + proteinas ;
        }
        // Si no hemos indicado ningún producto
        else if(producto == "ninguno"){
          clave_error = "Error";
          objeto[clave_error] = []
          result = { error: "Debe indicar un producto" };
          objeto[clave_error].push(result);
        }
        //Si no existe el producto
        else if (existeProducto==false){
            clave_error = "Error";
            objeto[clave_error] = []
            result = { error: "Producto no disponible." };
            objeto[clave_error].push(result);
        }
        i+=1
      }

    // Se envía el resultado
    res.status(200).send(objeto);

}
