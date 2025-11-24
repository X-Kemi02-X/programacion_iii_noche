function saludar() {
    return 'Hola desde un funcion Typescript';
}
console.log(saludar());
function sumarOpcional(numero1, numero2) {
    return numero1 + (numero2 ? numero2 : 15);
}
console.log(sumarOpcional(19, 6));
console.log(sumarOpcional(10));
var SumarFlecha = function (numero1, numero2) {
    return numero1 + (numero2 || 15);
};
console.log(sumarOpcional(19, 6));
console.log(sumarOpcional(10));
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}
mostrarMensaje('mensaje desde un void');
