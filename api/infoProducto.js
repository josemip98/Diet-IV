const datos = require("./productos.json");
const Dieta  = require("../src/dieta.js");
const Producto = require("../src/producto.js");

//AÑADIMOS FUNCION PARA LISTAR PRODUCTOS
function listadoProductos(){

    var i = 0;
    var result = ""
    var dieta = new Dieta();
    while( i < datos.productos.length){
      nombre= datos.productos[i]["nombre"];
      calorias= datos.productos[i]["calorias"];
      grasa= datos.productos[i]["grasa"];
      proteinas= datos.productos[i]["proteinas"];
      hidratos= datos.productos[i]["hidratos"];
      i+=1
      var producto = new Producto(nombre,calorias,grasa,proteinas,hidratos)
      //dieta.AniadirProducto(producto)
    }

    result += "Producto: " + nombre + ", calorias: " + calorias + ", grasa: " + grasa + ", hidratos: " + hidratos + ", proteinas: " + proteinas ;

    return result
}


module.exports = async (req,res) =>{
    //Que contiene req.body
    if(req.body != undefined){
        //Captamos id del mensaje
        var IDchat = req.body.message.chat.id
        //Captamos contenido de mensaje
        var text = req.body.message.text
        var result = ""
        // Según el contenido obtenemos una lista de series u otra
        if(text == "/lista"){
            result="Listado de productos....\n";
            result+=listadoProductos()
        }
        else if (text == "/muestraBody") {
          var result = JSON.stringify(req.body)
        }

        // Devolvemos
        var objetoJSON ={text : result,method : "sendMessage",chat_id : IDchat}
        res.setHeader("Content-Type","application/json");
        res.status(200).json(objetoJSON)
    }
    else{
        //Enviamos un mensaje normal
        res.status(200).send("Iniciamos el bot de OrganizeUDiet")
    }

}
