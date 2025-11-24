const formulario = document.getElementById('formulario-prestamo');
const contenedor = document.getElementById('contenedorPrestamos');
let prestamos = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const tituloLibro = document.getElementById('titulo-libro').value.trim();
  const usuario = document.getElementById('usuario').value.trim();
  const fechaDevolucion = document.getElementById('fecha-devolucion').value.trim();

  if (tituloLibro && usuario && fechaDevolucion) {
    const nuevoPrestamo = { 
      id: Date.now(), 
      titulo: tituloLibro, 
      usuario: usuario, 
      devolucion: fechaDevolucion 
    };
    prestamos.push(nuevoPrestamo);
    renderizarPrestamo(nuevoPrestamo);
    formulario.reset();
  }
});

function renderizarPrestamo({ id, titulo, usuario, devolucion }) {
  const div = document.createElement('div');
  div.className = 'prestamo';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${titulo}</h3>
    <p>Prestado a: <strong>${usuario}</strong></p>
    <p>Fecha de Devolución: ${devolucion}</p>
    <div class="acciones"><button class="devolver">Marcar como Devuelto</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('devolver')) {
    const tarjeta = e.target.closest('.prestamo');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    
    // Lógica para eliminar el préstamo y simular la devolución
    prestamos = prestamos.filter(p => p.id !== id);
    tarjeta.remove();
  }
});