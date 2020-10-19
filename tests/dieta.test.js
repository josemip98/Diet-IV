
const Dieta = require("../src/dieta.js");

//Variables
var producto;
var listaProductos;
var informacionNutricional;

const dieta = new Dieta("Arroz", "354Kcal, 0,5g de grasa, 6,5g de proteinas y 79g de hidratos");

describe("Testeando la clase dieta.js", () => {

  describe("Testeando el constructor", () =>{
    test("Comprobando que funciona correctamente", () => {
      expect(dieta.listaProductos).toBe("Arroz");
      expect(dieta.informacionNutricional).toBe("354Kcal, 0,5g de grasa, 6,5g de proteinas y 79g de hidratos");
    });
  });
});

describe("Testeando el método AniadirProducto()", () => {
 test("Comprobando el metodo para añadir productos a la clase dieta", () => {
    listaProductos = "Arroz";
    informacionNutricional = "354Kcal, 0,5g de grasa, 6,5g de proteinas y 79g de hidratos";
    thrown_error = () => dieta.AniadirProducto(listaProductos, informacionNutricional);
  });
});

describe("Testeando el método MostrarDieta()", () => {
   test("Comprobamos que se han mostrado todos los productos", () => {
        var tam_vector_esperado = dieta.MostrarDieta().length;
        var tam_productos = dieta.listaProductos.length;
        expect(tam_vector_esperado).toEqual(tam_productos);
      });
    });
