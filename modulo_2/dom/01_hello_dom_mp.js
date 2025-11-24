console.log(document.head);
console.log(document.body.children);
console.log(document.title);

let contenedorLibros = document.getElementById("lista-libros");
console.log(contenedorLibros.id);

contenedorLibros.textContent = "Aquí se cargarán los libros con JavaScript.";