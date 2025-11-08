var Libro = /** @class */ (function () {
    function Libro(titulo, autor) {
        this.cota = '231312321';
        this.titulo = titulo;
        this.autor = autor;
    }
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.getCota = function () {
        return this.cota;
    };
    return Libro;
}());
var libroHistoriaQuito = new Libro('Historia DE Quito', 'Pedro Perez');
console.log('Titulo:', libroHistoriaQuito.titulo);
console.log('Autor (Inicial):', libroHistoriaQuito.getAutor());
console.log('Cota:', libroHistoriaQuito.getCota());
libroHistoriaQuito.setAutor('Luis Lozano');
console.log('--- Autor modificado ---');
console.log('Autor (Actualizado):', libroHistoriaQuito.getAutor());
