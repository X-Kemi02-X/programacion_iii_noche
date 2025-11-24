console.log("FUNCIONES DE LA BIBLIOTECA");

console.log("Funcion Simple (Mensaje de Bienvenida)");
function darBienvenida(){
    console.log("¡Bienvenido al Sistema de Gestión de la Biblioteca MP!");
}
darBienvenida();

console.log("Funcion con parametros (Cálculo de Multa)");
function calcularMulta(diasRetraso, costoDiario){
    return diasRetraso * costoDiario;
}
console.log("Multa total por 5 días: $", calcularMulta(5, 0.50));

console.log("Funcion Flecha (Generación de Código)");
const generarCodigoLibro = () => {
    console.log("Generando código de inventario único...")
}
generarCodigoLibro();

const calcularISBN = (serie, idUnico) => {
    return serie + idUnico;
}
console.log("Nuevo ISBN generado:", calcularISBN(978, 1500));

console.log("Funcion retorno directo (Días de Lectura Rápida)");
const calcularDíasLectura = paginas => paginas / 50;
console.log("Días necesarios para leer un libro de 300 páginas:", calcularDíasLectura(300));

console.log("Funcion con parametros por defecto (Días de Préstamo)");
function calcularFechaDevolucion(diasBase, diasExtension = 7){
    return diasBase + diasExtension;
}
console.log("Días totales de préstamo con extensión:", calcularFechaDevolucion(14, 14));
console.log("Días totales de préstamo sin especificar extensión (por defecto 7):", calcularFechaDevolucion(14));