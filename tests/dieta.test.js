const Producto = require("../src/producto.js");
const Dieta = require("../src/dieta.js");
//Variables
var producto;
var listaProductos;
var informacionNutricional;

const dieta = new Dieta();

describe("Testeando el método AniadirProducto()", () => {
 test("Comprobando el metodo para añadir productos a la clase dieta", () => {
    nombre = "Arroz";
    calorias = "354Kcal";
    grasa = "0,5g";
    proteinas = "6,5g";
    hidratos = "79g";
    producto = new Producto(nombre,calorias,grasa,proteinas,hidratos);
    thrown_error = () => dieta.AniadirProducto(producto);
  });
});

describe("Testeando el método MostrarDieta()", () => {
   test("Comprobamos que se han mostrado todos los productos", () => {
        var tam_vector_esperado = dieta.mostrarDieta().length;
        var tam_productos = dieta.listaProductos.length;
        expect(tam_vector_esperado).toEqual(tam_productos);
    });
  });

  describe("Testeando el método mostrarProducto()", () => {
    test("Comprobando que funciona correctamente al pasarle un producto existente", () => {
      //nos devuelve el producto con su informacion nutricional
      producto = "Arroz";
      resultado = dieta.mostrarProducto(producto);
      for(var i in dieta.listaProductos){
        if(producto == dieta.listaProductos[i]){
          var indiceProducto = i;
        }
      }
      informacionNutricional = dieta.listaProductos[indiceProducto];

      expect(resultado).toBe(informacionNutricional);
    });
  });
