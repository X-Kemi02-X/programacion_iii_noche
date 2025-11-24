import { Vehiculo } from "./05_herencia";

class Camion extends Vehiculo {
    capacidadCarga: number = 0;

    setCapacidad(capacidad: number): void {
        this.capacidadCarga = capacidad;
    }

    getCapacidad(): number {
        return this.capacidadCarga;
    }
}

const miCamion = new Camion('Ford');
miCamion.setCapacidad(500);
console.log('Marca del camión:', miCamion.marca);
console.log('Capacidad de carga:', miCamion.getCapacidad(), 'kg');
miCamion.moverse();