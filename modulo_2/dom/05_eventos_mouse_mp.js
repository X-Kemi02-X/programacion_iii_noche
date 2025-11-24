const estante = document.getElementById('estante');

if (estante) {
    estante.addEventListener('mouseover', () => {
        estante.style.backgroundColor = 'orange';
        estante.textContent = 'Verificar disponibilidad...';
    });

    estante.addEventListener('mouseout', () => {
        estante.style.backgroundColor = 'blue';
        estante.textContent = 'Estante de Ciencia Ficción';
    });

    estante.addEventListener('click', () => {
        alert('¡Abriendo el Catálogo de Ciencia Ficción!');
    });
} else {
    console.warn('Elemento con id "estante" no encontrado.');
}