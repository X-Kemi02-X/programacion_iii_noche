export class Vehiculo {
    public marca: string; // La propiedad marca debe ser public

    constructor(marca: string) {
        this.marca = marca;
    }

    public moverse(): void { // El método moverse debe ser public
        console.log(this.marca, 'se encuentra en movimiento');
    }
}