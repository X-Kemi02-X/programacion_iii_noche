const indicador = document.getElementById('indicador-capacidad');

function cambiarEstadoOcupacion() {
  const estados = [
    { color: '#008000', texto: 'Baja' },
    { color: '#ffc107', texto: 'Media' },
    { color: '#dc3545', texto: 'Alta' }
  ];
  const randomEstado = estados[Math.floor(Math.random() * estados.length)];
  indicador.style.backgroundColor = randomEstado.color;
  indicador.textContent = randomEstado.texto;
}

function aumentarCapacidadVisual() {
  const width = parseInt(indicador.style.width);
  const height = parseInt(indicador.style.height);
  indicador.style.width = (width + 30) + 'px';
  indicador.style.height = (height + 30) + 'px';
}

function reiniciarEstado() {
  indicador.style.width = '150px';
  indicador.style.height = '150px';
  indicador.style.backgroundColor = '#008000';
  indicador.textContent = 'Baja';
}