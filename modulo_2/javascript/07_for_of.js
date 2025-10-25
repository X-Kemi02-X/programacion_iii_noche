console.log("CICLOS O BUCLES");
console.log("FOR OF");
const nombres = ["Jose", "Juan", "Pedro", "Simon"];
for (const nombre of nombres) {
    console.log("Hola", nombre);
}

const nombre="Kevin";
for (const letra of nombre){
    console.log("Letra", letra);
}

const numeros = [24,65,55,1,5,89];
let mayor = 0;
for (const numero of numeros){
    if (numero > mayor){
        mayor = numero;
    }
}
console.log("El numero mayor es:", mayor);

const persona = {
    nombre: "Anakin",
    apellido: "Skywalker",
    profesion: "Jedi"
}
for (const clave in persona){
    console.log("clave", clave, ":", persona[clave]);
}

console.log("--------------------------------------------------------------")
const libro = {
    nombre: "Don quijote",
    codigo: 1234,
    precio: 19.99
}
suma_claves=0;
for (const clave in libro){
    suma_claves++;
} 
console.log("el libro tiene: ", suma_claves, "claves");
