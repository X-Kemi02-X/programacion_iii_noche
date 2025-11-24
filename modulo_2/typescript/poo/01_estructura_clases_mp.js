var Libro = /** @class */ (function () {
    function Libro(titulo, ejemplares, isbn) {
        this.titulo = titulo;
        this.ejemplares = ejemplares;
        this.isbn = isbn;
    }
    Libro.prototype.mostrarEstado = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Ejemplares disponibles: ".concat(this.ejemplares));
    };
    return Libro;
}());
var libroNuevo = new Libro('Cien años de soledad', 5, '978-0307350485');
console.log("--- Informaci\u00F3n de Libro ---");
console.log("T\u00EDtulo");
console.log(libroNuevo.titulo);
console.log("ISBN");
console.log(libroNuevo.isbn);
libroNuevo.mostrarEstado();
