const estadoLibro = document.getElementById('estado-libro');
estadoLibro.textContent = "Libro: Disponible en Estante";
estadoLibro.style.color = "green";

const accionLibro = document.getElementById('accion-libro');
accionLibro.setAttribute('href', '/prestar/libro/123');
accionLibro.classList.add('boton-prestamo');
accionLibro.textContent = "Registrar Préstamo";