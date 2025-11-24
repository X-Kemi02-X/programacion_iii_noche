function saludar(): string{
    return 'Hola desde un funcion Typescript';
}

console.log(saludar());

function sumarOpcional(numero1: number, numero2?: number): number{
    return numero1+(numero2 ? numero2: 15)
}
console.log(sumarOpcional(19,6));
console.log(sumarOpcional(10));

const SumarFlecha = (numero1: number, numero2?: number): number =>{
    return numero1+(numero2 || 15)
}
console.log(sumarOpcional(19,6));
console.log(sumarOpcional(10));

function mostrarMensaje(mensaje: string):void {
    console.log(mensaje);
}
mostrarMensaje('mensaje desde un void')