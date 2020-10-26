const Producto = require("../src/producto.js")

const producto = new Producto("Arroz", "354Kcal", "0,5g", "6,5g", "79g");
describe("Testeando la clase producto.js", () => {
  describe("Testeando el constructor", () => {
    test("Comprobando el constructor", () => {
      expect(producto.nombre).toBe("Arroz")
      expect(producto.calorias).toBe("354Kcal")
      expect(producto.grasa).toBe("0,5g")
      expect(producto.proteinas).toBe("6,5g")
      expect(producto.hidratos).toBe("79g")
    });
  });
  describe("Testeando métodos get", () => {
    test("Testeando getProducto()", () => {
      var produc = producto.getProducto();
      var productoEsperado = "\nProducto -> " + producto.nombre + "\nInformación nutricional: \nCalorias -> " + producto.calorias + "\nGrasa -> " + producto.grasa + "\nProteinas -> " + producto.proteinas + "\nHidratos -> " + producto.hidratos;

      expect(produc).toBe(productoEsperado);
    });
    test("Testeando getNombre()", () => {
      var product = producto.getNombre();
      var productEsperado = producto.nombre;

      expect(product).toBe(productEsperado);
    });
 
    test("Testeando getCalorias()", () => {
      var product = producto.getCalorias();
      var productEsperado = producto.calorias;

      expect(product).toBe(productEsperado);
    });

    test("Testeando getGrasa()", () => {
      var product = producto.getGrasa();
      var productEsperado = producto.grasa;

      expect(product).toBe(productEsperado);
    });

    test("Testeando getProteinas()", () => {
      var product = producto.getProteinas();
      var productEsperado = producto.proteinas;

      expect(product).toBe(productEsperado);
    });

    test("Testeando getHidratos()", () => {
      var product = producto.getHidratos();
      var productEsperado = producto.hidratos;

      expect(product).toBe(productEsperado);
    });
  });
  describe("Testeando métodos set", () => {
    test("Testeando setProducto()", () => {
      var productoNuevo = "Arroz";
      producto.setProducto(productoNuevo);

      expect(producto.nombre).toBe(productoNuevo);
    });

    test("Testeando setCalorias()", () => {
      var caloriasNuevo = "354Kcal";
      producto.setCalorias(caloriasNuevo);

      expect(producto.calorias).toBe(caloriasNuevo);
    });

    test("Testeando setGrasa()", () => {
      var grasaNuevo = "0,5g";
      producto.setGrasa(grasaNuevo);

      expect(producto.grasa).toBe(grasaNuevo);
    });

    test("Testeando setProteinas()", () => {
      var proteinasNuevo = "6,5g";
      producto.setProteinas(proteinasNuevo);

      expect(producto.proteinas).toBe(proteinasNuevo);
    });

    test("Testeando setHidratos()", () => {
      var hidratosNuevo = "79g";
      producto.setHidratos(hidratosNuevo);

      expect(producto.hidratos).toBe(hidratosNuevo);
    });
  });
});
