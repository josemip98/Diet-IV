const datos = require("./data/productos.json");
const funcion = require("./bot.js");
const Dieta  = require("../src/dieta.js");
const Producto = require("../src/producto.js");

module.exports = async (req,res) =>{

  if(req.body.message != undefined){

    var IDchat = req.body.message.chat.id
    var text = req.body.message.text
    var result = ""
    var expresion = /\/producto (.+)/

  	if(text == "/start"){
      result="¡Bienvenido al bot para organizar tu dieta!\n";
  	}
    else if(text == "/help"){
      result = "/start - comenzar a usar el bot \n/lista - muestra el listado de los productos disponibles \n/producto <nombre_producto> - muestra un producto concreto junto con su información nutricional";
    }
  	else if(text == "/lista"){
      result="Listado de productos:\n";
      result+=funcion.listadoProductos();
    }else if(text.match(expresion)){
      result="Mostrando producto:\n";
      var palabra = text.split(" ")[1];
      result+=funcion.consultaProducto(palabra);
    }
    else{
      result="/help - lista de comandos disponibles";
    }

    var objetoJSON ={text : result,method : "sendMessage",chat_id : IDchat}
    res.setHeader("Content-Type","application/json");
    res.status(200).json(objetoJSON)
    }
    else{
      res.status(200).send("Iniciamos el bot de OrganizeUDiet")
    }

  }
