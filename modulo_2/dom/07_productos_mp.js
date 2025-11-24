const libros = [
  { titulo: "Cien años de soledad", autor: "G. G. Márquez", isbn: "978-0307350485", ejemplares: 5, estante: "A-Ficción Sur" },
  { titulo: "El Gran Gatsby", autor: "F. S. Fitzgerald", isbn: "978-0743273565", ejemplares: 12, estante: "B-Clásicos Norte" },
  { titulo: "1984", autor: "George Orwell", isbn: "978-0451524935", ejemplares: 8, estante: "C-Distopía Central" },
  { titulo: "Don Quijote de la Mancha", autor: "M. de Cervantes", isbn: "978-0060935294", ejemplares: 3, estante: "D-Historia General" },
  { titulo: "Sapiens", autor: "Yuval N. Harari", isbn: "978-0062316097", ejemplares: 15, estante: "E-No Ficción Este" },
  { titulo: "El Código Da Vinci", autor: "Dan Brown", isbn: "978-0385504201", ejemplares: 10, estante: "F-Misterio Oeste" },
  { titulo: "Crimen y Castigo", autor: "Fiódor Dostoievski", isbn: "978-0486415871", ejemplares: 6, estante: "G-Filosofía" },
  { titulo: "Moby Dick", autor: "Herman Melville", isbn: "978-0142437247", ejemplares: 4, estante: "H-Aventura" },
  { titulo: "La Odisea", autor: "Homero", isbn: "978-0140268867", ejemplares: 9, estante: "I-Poesía Antigua" },
  { titulo: "El Alquimista", autor: "Paulo Coelho", isbn: "978-0061122415", ejemplares: 20, estante: "J-Autoayuda" }
];

const tabla = document.getElementById('cuerpoCatalogo');
libros.forEach(libro => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${libro.titulo}</td>
    <td>${libro.autor}</td>
    <td>${libro.isbn}</td>
    <td>${libro.ejemplares}</td>
    <td>${libro.estante}</td>
  `;
  tabla.appendChild(fila);
});