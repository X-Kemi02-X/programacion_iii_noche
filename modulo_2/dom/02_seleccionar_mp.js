const titulo = document.getElementById('titulo-pagina');
console.log(titulo.textContent);

const categorias = document.querySelectorAll('[categoria]');
Array.from(categorias)
    .forEach(categoria => console.log(categoria.textContent));

const libros = document.getElementsByClassName('libro-item');
Array.from(libros)
    .forEach(libro => console.log(libro.textContent));

const autores = document.getElementsByName('autor-principal');
Array.from(autores)
    .forEach(autor => console.log(autor.textContent));