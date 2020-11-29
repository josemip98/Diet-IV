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
    var producto_encontrado

      while( i < datos.productos.length){
        var prod = new Producto(datos.productos[i].nombre,datos.productos[i].calorias,datos.productos[i].grasa,datos.productos[i].proteinas,datos.productos[i].hidratos);
        dieta.aniadirProducto(prod);
        producto_encontrado = dieta.buscarProducto(prod.getNombre())
          if(producto_encontrado.getNombre() == producto){
            existeProducto = true;
            var producto_a_mostrar = producto_encontrado;
          }
        i+=1
      }
        //Si existe el producto lo muestra
        if(existeProducto == true){
          var clave = "productos";
          datosJSON.push({
                  "Nombre ": producto_a_mostrar.getNombre(),
                  "Calorias": producto_a_mostrar.getCalorias(),
                  "Grasa": producto_a_mostrar.getGrasa(),
                  "Proteinas": producto_a_mostrar.getProteinas(),
                  "Hidratos": producto_a_mostrar.getHidratos()
          });
            objeto[clave].push(datosJSON);
          //result = "Producto: " + nombre + ", calorias: " + calorias + ",
          // grasa: " + grasa + ", hidratos: " + hidratos + ", proteinas: "
          // + proteinas ;
        }
        // Si no hemos indicado ningún producto
        else if(producto == "ninguno"){
          clave = "Error";
          objeto[clave] = []
          result = { error: "Debe indicar un producto" };
          objeto[clave].push(result);
        }
        //Si no existe el producto
        else if (existeProducto==false){
            clave = "Error";
            objeto[clave] = []
            result = { error: "Producto no disponible." };
            objeto[clave].push(result);
        }

    // Se envía el resultado
    res.status(200).send(objeto);

}
