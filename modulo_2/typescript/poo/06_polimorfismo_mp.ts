import { Recurso } from "./05_herencia_mp";

class Revista extends Recurso {
    periodicidad: string = 'Mensual';

    setPeriodicidad(periodicidad: string): void {
        this.periodicidad = periodicidad;
    }

    getPeriodicidad(): string {
        return this.periodicidad;
    }

    public indexar(): void {
        console.log(`Revista ${this.identificador} indexada como publicación periódica.`);
    }
}

const revistaCientifica = new Revista('R-C-002');
revistaCientifica.setPeriodicidad('Trimestral');

console.log('ID del Recurso:', revistaCientifica.identificador);
console.log('Periodicidad:', revistaCientifica.getPeriodicidad());

revistaCientifica.indexar();