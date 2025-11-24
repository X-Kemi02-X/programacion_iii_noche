var RecursoBibliotecario = /** @class */ (function () {
    function RecursoBibliotecario(titulo, isbn) {
        this.ubicacionEstante = 'A-201';
        this.titulo = titulo;
        this.isbn = isbn;
    }
    RecursoBibliotecario.prototype.getISBN = function () {
        return this.isbn;
    };
    RecursoBibliotecario.prototype.setISBN = function (nuevoISBN) {
        this.isbn = nuevoISBN;
    };
    RecursoBibliotecario.prototype.getUbicacionEstante = function () {
        return this.ubicacionEstante;
    };
    return RecursoBibliotecario;
}());
var recursoInvestigacion = new RecursoBibliotecario('Manual de Tipografía', '978-0062316097');
console.log('Recurso:');
console.log('Título (public):', recursoInvestigacion.titulo);
console.log('ISBN (private, usando getter Inicial):', recursoInvestigacion.getISBN());
console.log('Ubicación (protected, usando getter):', recursoInvestigacion.getUbicacionEstante());
recursoInvestigacion.setISBN('978-1234567890');
console.log('--- ISBN Modificado ---');
console.log('ISBN (private, usando getter Actualizado):', recursoInvestigacion.getISBN());
