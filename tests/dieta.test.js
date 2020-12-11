const Producto = require("../src/producto.js");
const Dieta = require("../src/dieta.js");

var listaProductos;
var informacionNutricional;

const dieta = new Dieta();
var nombre = "arroz";
var calorias = "354Kcal";
var grasa = "0,5g";
var proteinas = "6,5g";
var hidratos = "79g";
var producto = new Producto(nombre,calorias,grasa,proteinas,hidratos);
dieta.aniadirProducto(producto);

describe("Testeando el método aniadirProducto()", () => {
 test("Comprobando el metodo para añadir productos a la clase dieta", () => {
    nombre = "Arroz";
    calorias = "354Kcal";
    grasa = "0,5g";
    proteinas = "6,5g";
    hidratos = "79g";
    producto = new Producto(nombre,calorias,grasa,proteinas,hidratos);
    var tam_vector_esperado = dieta.listaProductos.length+1;
    dieta.aniadirProducto(producto);
    var tam_productos = dieta.listaProductos.length;
    expect(tam_vector_esperado).toEqual(tam_productos);
  });
});

describe("Testeando el método eliminaProducto()", () => {
 test("Comprobando el metodo para eliminar un producto de la clase dieta", () => {
    nombre = "arroz";
    var tam_vector_esperado = dieta.listaProductos.length-1;
    dieta.eliminarProducto(nombre);
    var tam_productos = dieta.listaProductos.length;
    expect(tam_vector_esperado).toEqual(tam_productos);
  });
});

describe("Testeando el método mostrarDieta()", () => {
   test("Comprobamos que se han mostrado todos los productos", () => {
        var tam_vector_esperado = dieta.mostrarDieta().length;
        var tam_productos = dieta.listaProductos.length;
        expect(tam_vector_esperado).toEqual(tam_productos);
    });
  });

  describe("Testeando el método buscarProducto()", () => {
    test("Comprobando que funciona correctamente al pasarle un producto existente", () => {
      //nos devuelve el producto con su informacion nutricional
      producto = "arroz";
      resultado = dieta.buscarProducto(producto);
      for(var i in dieta.listaProductos){
        if(producto == dieta.listaProductos[i]){
          var indiceProducto = i;
        }
      }
      informacionNutricional = dieta.listaProductos[indiceProducto];

      expect(resultado).toBe(informacionNutricional);
    });
  });
