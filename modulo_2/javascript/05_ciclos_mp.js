console.log("CICLOS O BUCLES EN GESTIÓN DE BIBLIOTECA");

for(let estante = 1; estante <= 5; estante++){
    console.log("Revisando libros en Estante ", estante);
}

let multaTotal = 0;
const multaDiaria = 0.50;
const diasRetraso = 7;

for(let dia = 1; dia <= diasRetraso; dia++){
    multaTotal += multaDiaria;
}
console.log(`Multa total por ${diasRetraso} días: $${multaTotal}`);

let isbn = "9781234567890";
console.log("Verificando dígitos del ISBN:");
for(let i = 0; i < isbn.length; i++){
    console.log(isbn[i]);
}

const prestamosBase = 10;
for (let semana = 1; semana <= 4; semana++){
    const prestamosProyectados = prestamosBase * semana;
    console.log(`Préstamos proyectados en Semana ${semana}: ${prestamosProyectados}`);
}