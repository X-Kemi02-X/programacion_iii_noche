function getStatusBiblioteca() {
    return 'El sistema de la biblioteca está operativo';
}
console.log('Estado:', getStatusBiblioteca());
function calcularMultaOpcional(diasRetraso, costoDiario) {
    return diasRetraso * (costoDiario ? costoDiario : 0.50);
}
console.log('Multa por 5 días (costo $0.60):', calcularMultaOpcional(5, 0.60));
console.log('Multa por 10 días (costo por defecto $0.50):', calcularMultaOpcional(10));
var sumarDiasPrestamo = function (diasBase, diasExtension) {
    return diasBase + (diasExtension || 7);
};
console.log('Total días (14 base + 10 extensión):', sumarDiasPrestamo(14, 10));
console.log('Total días (14 base + 7 por defecto):', sumarDiasPrestamo(14));
function registrarAccion(mensaje) {
    console.log('Registro de Acción:', mensaje);
}
registrarAccion('Préstamo del libro "El Quijote" realizado con éxito.');
