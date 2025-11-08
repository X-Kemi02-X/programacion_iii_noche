class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(): void{
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`)
    }
}

const amigoKevin = new Persona('Kevin', 19)
console.log(`Nombre`);
console.log(amigoKevin.nombre);
console.log(`Edad`);
console.log(amigoKevin.edad);
amigoKevin.saludar();
