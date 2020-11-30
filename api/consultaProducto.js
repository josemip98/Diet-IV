const datos = require("./productos.json");
const Dieta  = require("../src/dieta.js");
const Producto = require("../src/producto.js");

module.exports = (req,res) =>{

    var {producto="ninguno"} = req.query
    var result;
    var i = 0;
    var existeProducto = false;
    var objeto = {}
    var objetoJSON = {}
    var dieta = new Dieta();
    var producto_encontrado
    var producto_a_mostrar
    var cod

      while( i < datos.productos.length){
        var prod = new Producto(datos.productos[i].nombre,datos.productos[i].calorias,datos.productos[i].grasa,datos.productos[i].proteinas,datos.productos[i].hidratos);
        dieta.aniadirProducto(prod);
        producto_encontrado = dieta.buscarProducto(prod.getNombre())
          if(producto_encontrado.getNombre() == producto){
            existeProducto = true;
            producto_a_mostrar = producto_encontrado;
          }
        i+=1
      }
        //Si existe el producto lo muestra
        if(existeProducto == true){
          var clave = "productos";
          result = {
                  nombre: producto_a_mostrar.getNombre(),
                  calorias: producto_a_mostrar.getCalorias(),
                  grasa: producto_a_mostrar.getGrasa(),
                  proteinas: producto_a_mostrar.getProteinas(),
                  hidratos: producto_a_mostrar.getHidratos()
          };
            obj[clave].push(result);
            cod = 200
        }
        // Si no hemos indicado ningún producto
        else if(producto == "ninguno"){
          clave = "Error";
          objeto[clave] = []
          result = { error: "Debe indicar un producto" };
          objeto[clave].push(result);
          cod = 404
        }
        //Si no existe el producto
        else if (existeProducto==false){
            clave = "Error";
            objeto[clave] = []
            result = { error: "Producto no disponible." };
            objeto[clave].push(result);
            cod = 404
        }

    // Se envía el resultado
    res.status(cod).send(objeto);

}
