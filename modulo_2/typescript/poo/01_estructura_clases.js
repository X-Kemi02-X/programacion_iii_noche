var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola soy ".concat(this.nombre, " y tengo ").concat(this.edad));
    };
    return Persona;
}());
var amigoKevin = new Persona('Kevin', 19);
console.log("Nombre");
console.log(amigoKevin.nombre);
console.log("Edad");
console.log(amigoKevin.edad);
amigoKevin.saludar();
