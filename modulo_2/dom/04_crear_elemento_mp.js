let contadorLibros = 1;
const btnAgregar = document.getElementById('agregar-libro');
const catalogo = document.getElementById('catalogo-libros');

btnAgregar.addEventListener('click', () => {
    const nuevoLibro = document.createElement('div');
    nuevoLibro.textContent = `Libro Nuevo #${contadorLibros}`;
    nuevoLibro.classList.add('libro-item');
    catalogo.appendChild(nuevoLibro);
    contadorLibros++;
});

const btnRetirar = document.getElementById('retirar-libros');
btnRetirar.addEventListener('click', () => {
    const libros = document
        .getElementsByClassName('libro-item');
    Array.from(libros)
        .forEach(libro => libro.remove());
    contadorLibros = 1;
});

const btnDobleClick = document
    .getElementById('btnDobleClick');
btnDobleClick.addEventListener('dblclick', () => {
    alert("Doble Click para acción de mantenimiento de la Biblioteca.");
});

const tituloInput = document
    .getElementById('titulo-input');
tituloInput.addEventListener('input', (e) => {
    console.log('Escribiendo Título:', e.target.value);
});

const form = document
    .getElementById('formulario-libro');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Libro a guardar: ${tituloInput.value}`);
});

tituloInput.addEventListener('keydown', (e) => {
    console.log('Tecla presionada para título: ', e.key);
});

window.addEventListener('scroll', () => {
    console.log('Scroll detectado en la página del catálogo');
});