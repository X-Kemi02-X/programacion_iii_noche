interface CredencialesMiembro {
    codigo: number,
    nombreUsuario: string,
    pin: string
}

const credencialesMiembro: CredencialesMiembro = {
    codigo: 502,
    nombreUsuario: 'adminBiblio',
    pin: 'securePin4321',
}

function validarAcceso(credenciales: CredencialesMiembro): void {
    const PIN_CORRECTO = 'securePin4321';
    const USUARIO_VALIDO = 'adminBiblio';

    if (credenciales.pin === PIN_CORRECTO && credenciales.nombreUsuario === USUARIO_VALIDO) {
        console.log(`Miembro ${credenciales.nombreUsuario} autenticado exitosamente. Acceso al sistema.`);
    } else {
        console.log('Acceso denegado. Credenciales inválidas.');
    }
}

// Prueba 1: Acceso correcto
validarAcceso(credencialesMiembro);

// Prueba 2: Acceso incorrecto
const intentoFallido: CredencialesMiembro = {
    codigo: 502,
    nombreUsuario: 'adminBiblio',
    pin: 'pinincorrecto'
}
validarAcceso(intentoFallido);