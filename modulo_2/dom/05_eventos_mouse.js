const caja = document.getElementById('caja');

if (caja) {
    caja.addEventListener('mouseover', () => {
        caja.style.backgroundColor = 'yellow';
    });

    caja.addEventListener('mouseout', () => {
        caja.style.backgroundColor = 'lightgray';
    });

    caja.addEventListener('click', () => {
        alert('¡click!');
    });
} else {
    console.warn('Elemento con id "caja" no encontrado en el DOM. Revisa que el script se esté cargando y la ruta sea correcta.');
}