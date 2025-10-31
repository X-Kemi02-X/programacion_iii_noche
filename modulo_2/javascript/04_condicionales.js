console.log("CONDICIONALES");
console.log("CONDICIONAL IF");
let temperatura=10;
if(temperatura>30){
    console.log("Hace calor");
}
console.log("CONDICIONAL IF - ELSE");
const password="hola12345";
if(password==="hola12345"){
    console.log("Acceso concedido");
}else{
    console.log("Acceso denegado");
}

console.log("CONDICIONAL ANIDADOS");
const edad=19;
const tienelicencia=true;
if(edad>18){
    if(tienelicencia==true){
        console.log("Puede conducir");
    }else{
        console.log("No puede conducir, no tiene licencia");
    }
}else{
    console.log("No puede conducir, es menor de edad");
}

if(tienelicencia){
    if(edad>=18){
        console.log("Puede conducir");
    }else{
        console.log("No puede conducir, es menor de edad");
    }
}else{
    console.log("No puede conducir, no tiene licencia");
}

if(edad>18 && tienelicencia==true){
    console.log("Puede conducir");
}else if(edad>18){
    console.log("Necesita una licencia para conducir");
}else{
    console.log("No puede conducir, es menor de edad");
}

console.log("CONDICIONAL SWITCH");
const dia= "sabado";
switch(dia){
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("dia laboral");
        break;
    case "sabado":
    case "domingo":
        console.log("dia no laboral");
        break;
    default:
        console.log("dia no valido");
    
}