class RecursoBibliotecario {
    public titulo: string;
    private isbn: string;
    protected ubicacionEstante: string = 'A-201';

    constructor(titulo: string, isbn: string) {
        this.titulo = titulo;
        this.isbn = isbn;
    }

    getISBN(): string {
        return this.isbn;
    }

    setISBN(nuevoISBN: string): void {
        this.isbn = nuevoISBN;
    }

    getUbicacionEstante(): string {
        return this.ubicacionEstante;
    }
}

const recursoInvestigacion = new RecursoBibliotecario('Manual de Tipografía', '978-0062316097');

console.log('Recurso:');
console.log('Título (public):', recursoInvestigacion.titulo);
console.log('ISBN (private, usando getter Inicial):', recursoInvestigacion.getISBN());
console.log('Ubicación (protected, usando getter):', recursoInvestigacion.getUbicacionEstante());

recursoInvestigacion.setISBN('978-1234567890');

console.log('--- ISBN Modificado ---');
console.log('ISBN (private, usando getter Actualizado):', recursoInvestigacion.getISBN());