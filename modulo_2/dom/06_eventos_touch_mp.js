const areaConsulta = document
.getElementById('areaConsulta');

areaConsulta.addEventListener('touchstart', () => {
    areaConsulta.style.background = '#0056b3';
    areaConsulta.textContent = 'Buscando...';
});

areaConsulta.addEventListener('touchend', () => {
    areaConsulta.style.background = '#007bff';
    areaConsulta.textContent = 'Consulta Realizada';
    alert('¡Consulta de Catálogo Iniciada!');
});