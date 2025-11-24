abstract class Recurso {
    public titulo: string;

    constructor(titulo: string) {
        this.titulo = titulo;
    }

    abstract obtenerUbicacion(): void;

    prestar(): void {
        console.log(`Recurso '${this.titulo}' ha sido prestado.`);
    }
}

class Libro extends Recurso {
    public isbn: string;

    constructor(titulo: string, isbn: string) {
        super(titulo);
        this.isbn = isbn;
    }

    obtenerUbicacion() {
        console.log(`Ubicación: Estante de Ficción - ISBN ${this.isbn}`);
    }
}

const elHobbit = new Libro('El Hobbit', '978-0547928227');

elHobbit.prestar();
elHobbit.obtenerUbicacion();