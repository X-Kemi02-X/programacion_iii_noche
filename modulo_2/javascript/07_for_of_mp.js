console.log("CICLOS O BUCLES EN GESTIÓN DE BIBLIOTECA");

console.log("FOR OF (Iterando Títulos de Libros)");
const titulosLibros = ["1984", "Fahrenheit 451", "Un Mundo Feliz", "Odisea Espacial"];
for (const titulo of titulosLibros) {
    console.log("Título encontrado:", titulo);
}

console.log("FOR OF (Iterando ISBN)");
const isbn = "9781118335";
for (const digito of isbn){
    console.log("Dígito ISBN:", digito);
}

console.log("FOR OF (Encontrando el Libro con más Ejemplares)");
const ejemplares = [24, 65, 55, 12, 5, 89];
let maximoEjemplares = 0;
for (const cantidad of ejemplares){
    if (cantidad > maximoEjemplares){
        maximoEjemplares = cantidad;
    }
}
console.log("El máximo de ejemplares disponibles es:", maximoEjemplares);

console.log("FOR IN (Explorando Propiedades de Usuario)");
const usuario = {
    nombre: "Leia Organa",
    rol: "Administradora",
    antiguedad: 5
}
for (const propiedad in usuario){
    console.log("Propiedad de Usuario:", propiedad, ":", usuario[propiedad]);
}

console.log("--------------------------------------------------------------")
console.log("FOR IN (Contando Propiedades de un Libro)");
const recurso = {
    isbn: "978-0123456789",
    titulo: "El Mapa Estelar",
    ubicacion: "Estante X"
}
let contadorClaves = 0;
for (const clave in recurso){
    contadorClaves++;
}
console.log("El recurso tiene:", contadorClaves, "claves de metadatos.");