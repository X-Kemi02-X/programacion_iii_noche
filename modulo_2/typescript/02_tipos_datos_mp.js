var tituloLibro = 'Crónica de una muerte anunciada';
console.log('Título del Libro:', tituloLibro);
var ejemplaresDisponibles = 24.0;
console.log('Ejemplares Disponibles:', ejemplaresDisponibles);
var estaPrestado = false;
console.log('Estado de Préstamo:', estaPrestado);
var datoDiverso = 99;
datoDiverso = 'Cota del Estante';
console.log('Dato Diverso:', datoDiverso);
var librosEnPrestamo = 3;
var MAX_PRESTAMO = 5;
if (librosEnPrestamo >= MAX_PRESTAMO) {
    console.log('Límite de préstamos alcanzado (5)');
}
else {
    console.log("Puede prestar ".concat(MAX_PRESTAMO - librosEnPrestamo, " libros m\u00E1s"));
}
