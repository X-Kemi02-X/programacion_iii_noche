var credencialesMiembro = {
    codigo: 502,
    nombreUsuario: 'adminBiblio',
    pin: 'securePin4321',
};
function validarAcceso(credenciales) {
    var PIN_CORRECTO = 'securePin4321';
    var USUARIO_VALIDO = 'adminBiblio';
    if (credenciales.pin === PIN_CORRECTO && credenciales.nombreUsuario === USUARIO_VALIDO) {
        console.log("Miembro ".concat(credenciales.nombreUsuario, " autenticado exitosamente. Acceso al sistema."));
    }
    else {
        console.log('Acceso denegado. Credenciales inválidas.');
    }
}
// Prueba 1: Acceso correcto
validarAcceso(credencialesMiembro);
// Prueba 2: Acceso incorrecto
var intentoFallido = {
    codigo: 502,
    nombreUsuario: 'adminBiblio',
    pin: 'pinincorrecto'
};
validarAcceso(intentoFallido);
