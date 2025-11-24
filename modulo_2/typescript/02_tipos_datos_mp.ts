let tituloLibro: string = 'Crónica de una muerte anunciada';
console.log('Título del Libro:', tituloLibro);

let ejemplaresDisponibles: number = 24.0;
console.log('Ejemplares Disponibles:', ejemplaresDisponibles);

let estaPrestado: boolean = false;
console.log('Estado de Préstamo:', estaPrestado);

let datoDiverso: any = 99;
datoDiverso = 'Cota del Estante';
console.log('Dato Diverso:', datoDiverso);

let librosEnPrestamo: number = 3;
const MAX_PRESTAMO: number = 5;

if (librosEnPrestamo >= MAX_PRESTAMO) {
    console.log('Límite de préstamos alcanzado (5)');
} else {
    console.log(`Puede prestar ${MAX_PRESTAMO - librosEnPrestamo} libros más`);
}