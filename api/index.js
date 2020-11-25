const datos = require("./productos.json");
const funcion = require("./listadoProductos.js");
const Dieta  = require("../src/dieta.js");
const Producto = require("../src/producto.js");

module.exports = async (req,res) =>{
    //Que contiene req.body
    if(req.body != undefined){
        //Captamos id del mensaje
        var IDchat = req.body.message.chat.id
        //Captamos contenido de mensaje
        var text = req.body.message.text
        var result = ""
        // Según el contenido obtenemos una lista de series u otra
	if(text == "/start"){
    result="¡Bienvenido al bot para organizar tu dieta!\n";
	}
  else if(text == "/help"){
    result = "/start - comenzar a usar el bot \n/lista - muestra un listado de los productos disponibles \n";
  }
	else if(text == "/lista"){
    result="Listado de productos....\n";
    result+=funcion.listadoProductos()
  }
  else{
    result="/help para ver la lista de comandos disponibles";
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
