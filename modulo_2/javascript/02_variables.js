console.log("VARIABLES");
var saludo1="Hola";
var saludo2="Hola desde una variable"
console.log(saludo1+" "+saludo2);
console.log('${saludo1} ${saludo2}');
let numero = 24;
const angulo = 45;
console.log(numero, angulo);

console.log("TIPOS DE DATOS");
var nombre="Darth Vader"
console.log("string");
var tipoNumero=4444;
console.log("Tipo NUmerico ", typeof(tipoNumero));
var tipoBoolean=true;
console.log("Tipo Boolean ", typeof(tipoBoolean));
var tipoIndefinido=undefined;
console.log("Tipo Indefinido ", typeof(tipoIndefinido));
var tipoNull=null;
console.log("Tipo Nula ", typeof(tipoNula));
var tipoSimbolo=Symbol("Clave");
console.log("Tipo Simbolo ", typeof(tipoSimbolo));
var tipoBigEntero=432424n;
console.log("Tipo Big Entero ", typeof(tipoBigEntero));


const persona = {
    nombre: "Kevin",
    edad: 19
}

console.log(persona);
console.log(persona.edad);
console.log(persona.nombre);