interface Miembro {
    codigo: number,
    nombre: string,
    email: string
}

const miembroEstudiante: Miembro = {
    codigo: 101,
    nombre: 'Ana García',
    email: 'ana.garcia@estudiante.edu'
}

console.log('--- Miembro ---');
console.log(miembroEstudiante);
console.log(miembroEstudiante.nombre);

interface Recurso {
    isbn: number,
    titulo: string,
    ejemplares?: number,
    estante?: string
}

const libroFisico: Recurso = {
    isbn: 9780307350485,
    titulo: 'Cien Años de Soledad',
    ejemplares: 5,
    estante: 'F-A-03'
}

const revistaDigital: Recurso = {
    isbn: 9781234567890,
    titulo: 'Revista Tecnológica Q'
}
console.log('--- Recurso 1 (Completo) ---')
console.log(libroFisico)
console.log('--- Recurso 2 (Digital/Opcional) ---')
console.log(revistaDigital)