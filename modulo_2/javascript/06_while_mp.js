console.log("CICLOS DE GESTIÓN (WHILE Y DO-WHILE)");

console.log("WHILE (Revisión de Libros Pendientes)");
let libro = 1;
const LIMITE_LIBROS_PENDIENTES = 3;

while (libro <= LIMITE_LIBROS_PENDIENTES) {
    console.log("Revisando libro pendiente:", libro);
    libro++;
}
console.log("-------------------------------------------------------------")

let codigosInventario = [305, 412, -200, 450, 510];
let indiceInventario = 0;

while (codigosInventario[indiceInventario] > 0) {
    console.log("Código válido procesado:", codigosInventario[indiceInventario]);
    indiceInventario++;
}
console.log("-------------------------------------------------------------")

let idUsuario = 1;
const MAX_ID_USUARIO = 10;

while (idUsuario < MAX_ID_USUARIO) {
    if (idUsuario % 2 !== 0) {
        console.log("ID de Usuario Impar (Requiere Revisión):", idUsuario);
    }
    idUsuario++;
}
console.log("-------------------------------------------------------------")

console.log("DO-WHILE (Registro y Auditoría)");

let auditoria = 5;
do {
    console.log("Ejecutando auditoría de inventario:", auditoria);
    auditoria++;
} while (auditoria < 5);

console.log("-------------------------------------------------------------")

let diaContador = 1;
let prestamosAcumulados = 0;
const prestamosDiarios = 10;

do {
    prestamosAcumulados += prestamosDiarios;
    diaContador++;
} while (diaContador <= 5);
console.log("Préstamos acumulados en 5 días:", prestamosAcumulados);

console.log("-------------------------------------------------------------")

let ejemplaresDisponibles = 10;
do {
    console.log("Ejemplares restantes:", ejemplaresDisponibles);
    ejemplaresDisponibles--;
} while (ejemplaresDisponibles >= 0)

let libroID = 7;
let diasRetrasoReporte = 1;
const COSTO_MULTA = 0.50;

do {
    const totalMulta = COSTO_MULTA * diasRetrasoReporte;
    console.log(`Libro ID ${libroID} con ${diasRetrasoReporte} día(s) de retraso = $${totalMulta}`);
    diasRetrasoReporte++;
} while (diasRetrasoReporte <= 5);