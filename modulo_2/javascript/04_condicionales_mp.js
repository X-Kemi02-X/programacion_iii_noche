console.log("CONDICIONALES EN LA BIBLIOTECA");

console.log("CONDICIONAL IF (Clima para Mantenimiento)");
let temperatura = 25;
if (temperatura > 30) {
    console.log("Temperatura alta. Activar refrigeración especial en Archivo.");
}

console.log("CONDICIONAL IF - ELSE (Validación de Acceso)");
const claveAcceso = "biblioAdmin2025";
if (claveAcceso === "biblioAdmin2025") {
    console.log("Acceso concedido al panel de administración.");
} else {
    console.log("Acceso denegado. Credenciales incorrectas.");
}

console.log("CONDICIONAL ANIDADOS (Autorización de Préstamo)");
const librosPrestadosUsuario = 4;
const tieneMultasPendientes = true;

if (librosPrestadosUsuario < 5) {
    if (tieneMultasPendientes == false) {
        console.log("Préstamo autorizado. El usuario puede llevar el libro.");
    } else {
        console.log("Préstamo denegado: El usuario tiene multas pendientes.");
    }
} else {
    console.log("Préstamo denegado: Límite de 5 libros alcanzado.");
}

if (!tieneMultasPendientes) {
    if (librosPrestadosUsuario < 5) {
        console.log("Préstamo autorizado. Cumple requisitos.");
    } else {
        console.log("Préstamo denegado: Límite de libros alcanzado.");
    }
} else {
    console.log("Préstamo denegado: Debe pagar la multa.");
}

if (librosPrestadosUsuario < 5 && tieneMultasPendientes == false) {
    console.log("Préstamo aprobado.");
} else if (librosPrestadosUsuario < 5) {
    console.log("Préstamo pendiente: Necesita saldar multas.");
} else {
    console.log("Préstamo rechazado: Límite de libros excedido.");
}

console.log("CONDICIONAL SWITCH (Día de la Semana y Sección Activa)");
const diaSemana = "sabado";
switch (diaSemana) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Sección de Consulta e Investigación abierta.");
        break;
    case "sabado":
    case "domingo":
        console.log("Sección de Lectura Recreativa y Café activa.");
        break;
    default:
        console.log("Día no válido. Sistema de Biblioteca fuera de horario.");
}