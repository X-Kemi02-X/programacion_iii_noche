class Libro {
    titulo: string;
    ejemplares: number;
    isbn: string;

    constructor(titulo: string, ejemplares: number, isbn: string) {
        this.titulo = titulo;
        this.ejemplares = ejemplares;
        this.isbn = isbn;
    }

    mostrarEstado(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Ejemplares disponibles: ${this.ejemplares}`);
    }
}

const libroNuevo = new Libro('Cien años de soledad', 5, '978-0307350485');

console.log(`--- Información de Libro ---`);
console.log(`Título`);
console.log(libroNuevo.titulo);
console.log(`ISBN`);
console.log(libroNuevo.isbn);
libroNuevo.mostrarEstado();