abstract class Animal {
    abstract emitirSonido(): void;

    dormir(): void {
        console.log('Zzzzz...');
    }
}

class Perro extends Animal {
    emitirSonido() {
        console.log('Guau');
    }
}
const dog = new Perro();
dog.emitirSonido();
dog.dormir();