class MiembroBiblioteca {
    private pinAcceso: string = '4321';
    public codigoUsuario: string;

    constructor(codigoUsuario: string) {
        this.codigoUsuario = codigoUsuario;
    }

    autenticar(pin: string): boolean {
        return pin === this.pinAcceso;
    }
}

class Bibliotecario extends MiembroBiblioteca {
    public rol: string;

    constructor(codigoUsuario: string, rol: string) {
        super(codigoUsuario);
        this.rol = rol;
    }

    reporteAcceso(): void {
        console.log(`El usuario ${this.codigoUsuario} (Rol: ${this.rol}) ha iniciado sesión.`);
    }
}

const bibliotecarioAdmin = new Bibliotecario('B-101', 'Administrador');

const accesoConcedido = bibliotecarioAdmin.autenticar('4321');

if (accesoConcedido) {
    console.log(`Miembro ${bibliotecarioAdmin.codigoUsuario} autenticado correctamente.`);
    bibliotecarioAdmin.reporteAcceso();
} else {
    console.log('Acceso denegado: PIN incorrecto.');
}