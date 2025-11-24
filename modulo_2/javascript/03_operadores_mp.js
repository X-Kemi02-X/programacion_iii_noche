console.log("OPERADORES DE GESTIÓN DE BIBLIOTECA");

console.log("OPERADORES ARITMÉTICOS (Inventario/Multas)");
const librosPrestados = 15;
const librosDevueltos = 2;

const totalExistencia = librosPrestados + librosDevueltos;
console.log(`Existencia (${librosPrestados} + ${librosDevueltos}) = ${totalExistencia}`);

const diferenciaInventario = librosPrestados - librosDevueltos;
console.log(`Libros a Devolver (${librosPrestados} - ${librosDevueltos}) = ${diferenciaInventario}`);

const multaPorDia = 2.50;
const totalMulta = multaPorDia * librosPrestados;
console.log(`Multa total ($${multaPorDia} * ${librosPrestados} días) = $${totalMulta}`);

const librosPorEstante = librosPrestados / librosDevueltos;
console.log(`Libros/Estante (${librosPrestados} / ${librosDevueltos}) = ${librosPorEstante}`);

const restoCajas = librosPrestados % librosDevueltos;
console.log(`Resto de Libros sin Empacar (${librosPrestados} % ${librosDevueltos}) = ${restoCajas}`);

const potencialUsuarios = librosDevueltos**librosPrestados;
console.log(`Potencial Usuarios (${librosDevueltos} ** ${librosPrestados}) = ${potencialUsuarios}`);

console.log("OPERADORES DE COMPARACIÓN (Préstamos y Usuarios)");
const usuarioID_str = "005";
const usuarioID_num = 5;

console.log(`Igualdad Debil ${usuarioID_str} == ${usuarioID_num} => ${usuarioID_str == usuarioID_num}`);
console.log(`Igualdad Estricta ${usuarioID_str} === ${usuarioID_num} => ${usuarioID_str === usuarioID_num}`);
console.log(`Desigualdad Debil ${usuarioID_str} != ${usuarioID_num} => ${usuarioID_str != usuarioID_num}`);
console.log(`Desigualdad Estricta ${usuarioID_str} !== ${usuarioID_num} => ${usuarioID_str !== usuarioID_num}`);

const maxLibros = 5;
const librosDeUsuario = 3;

console.log(`Mayor que (${librosDeUsuario} > ${maxLibros}) => ${librosDeUsuario > maxLibros}`);
console.log(`Menor que (${librosDeUsuario} < ${maxLibros}) => ${librosDeUsuario < maxLibros}`);
console.log(`Mayor igual que (${librosDeUsuario} >= ${maxLibros}) => ${librosDeUsuario >= maxLibros}`);
console.log(`Menor igual que (${librosDeUsuario} <= ${maxLibros}) => ${librosDeUsuario <= maxLibros}`);

console.log("OPERADORES LÓGICOS (Condiciones de Préstamo)");
const tieneMulta = false;
const librosDisponibles = 10;
const stockMinimo = 5;
const usuarioEsEstudiante = true;

console.log(`AND "Y" (No Multa && Hay Stock) = ${!tieneMulta && librosDisponibles > stockMinimo}`);
console.log(`OR "O" (Stock Igual O Stock Menor) = ${librosDisponibles == stockMinimo || librosDisponibles < stockMinimo}`);
console.log(`! "Negacion" (Tiene Multa) = ${!tieneMulta}`);

console.log(`${!tieneMulta && usuarioEsEstudiante}`);
console.log(`${!tieneMulta && librosDisponibles > 10}`);
console.log(`${usuarioEsEstudiante || librosDisponibles > 10}`);
console.log(`${librosDisponibles > stockMinimo || librosDisponibles == stockMinimo}`);
console.log(`${!(librosDisponibles == stockMinimo && !usuarioEsEstudiante)}`);