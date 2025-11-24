export class Recurso {
    public identificador: string;

    constructor(identificador: string) {
        this.identificador = identificador;
    }

    public indexar(): void {
        console.log(`Recurso con ID ${this.identificador} ha sido indexado y catalogado.`);
    }
}

class Libro extends Recurso {
    public titulo: string;

    constructor(identificador: string, titulo: string) {
        super(identificador);
        this.titulo = titulo;
    }

    public mostrarTitulo(): void {
        console.log(`Título: ${this.titulo}. ID: ${this.identificador}`);
    }
}

const revistaDigital = new Recurso('REV-2025-001');
revistaDigital.indexar();

const libroFisico = new Libro('LIB-998-A', 'El Misterio del Estante 7');
libroFisico.mostrarTitulo();
libroFisico.indexar();