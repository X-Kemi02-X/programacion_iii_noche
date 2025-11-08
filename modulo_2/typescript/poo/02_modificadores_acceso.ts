class Libro {
    public titulo: string;
    private autor: string;
    protected cota: string = '231312321';

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(autor: string): void {
        this.autor = autor;
    }

    getCota(): string {
        return this.cota;
    }
}

const libroHistoriaQuito = new Libro('Historia DE Quito', 'Pedro Perez');

console.log('Titulo:', libroHistoriaQuito.titulo);
console.log('Autor (Inicial):', libroHistoriaQuito.getAutor());
console.log('Cota:', libroHistoriaQuito.getCota());

libroHistoriaQuito.setAutor('Luis Lozano');
console.log('--- Autor modificado ---');
console.log('Autor (Actualizado):', libroHistoriaQuito.getAutor());