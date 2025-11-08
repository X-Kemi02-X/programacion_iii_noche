abstract class CuentaBase {
    private saldo: number = 0;
    abstract operar(): void;

    modificarSaldo(monto: number): void {
        this.saldo = monto;
    }

    public consultarSaldo(): number {
        return this.saldo;
    }
}

class CuentaAhorro extends CuentaBase {
    operar(): void {
        console.log('Operando desde Cuenta Ahorro');
    }
}

class CuentaCorriente extends CuentaBase { // <-- Corregida la sintaxis 'Class'
    operar(): void {
        console.log('Operando desde cuenta Corriente');
    }
}

const myCuentaAhorro = new CuentaAhorro();
myCuentaAhorro.modificarSaldo(780);
myCuentaAhorro.operar();
console.log('saldo cuenta ahorro', myCuentaAhorro.consultarSaldo()); // <-- Ahora existe el método

const myCuentacorriente = new CuentaCorriente();
myCuentacorriente.modificarSaldo(1600);
myCuentacorriente.operar();
console.log('saldo cuenta corriente', myCuentacorriente.consultarSaldo());