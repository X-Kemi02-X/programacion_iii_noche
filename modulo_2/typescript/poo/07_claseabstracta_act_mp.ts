abstract class UsuarioBase {
    private librosPrestados: number = 0;
    abstract realizarAccion(): void;

    modificarLibrosPrestados(cantidad: number): void {
        this.librosPrestados = cantidad;
    }

    public consultarLibrosPrestados(): number {
        return this.librosPrestados;
    }
}

class UsuarioEstudiante extends UsuarioBase {
    realizarAccion(): void {
        console.log('Realizando préstamo de libros de texto.');
    }
}

class UsuarioDocente extends UsuarioBase {
    realizarAccion(): void {
        console.log('Realizando reserva de sala de lectura y materiales especializados.');
    }
}

const usuarioEstudiante = new UsuarioEstudiante();
usuarioEstudiante.modificarLibrosPrestados(4);
usuarioEstudiante.realizarAccion();
console.log('Libros prestados por Estudiante:', usuarioEstudiante.consultarLibrosPrestados());

const usuarioDocente = new UsuarioDocente();
usuarioDocente.modificarLibrosPrestados(12);
usuarioDocente.realizarAccion();
console.log('Libros prestados por Docente:', usuarioDocente.consultarLibrosPrestados());