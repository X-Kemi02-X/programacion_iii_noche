console.log("VARIABLES DE LA BIBLIOTECA");
var nombreBiblioteca = "Biblioteca Central MP";
var mensajeBienvenida = "Bienvenido al Sistema de Gestión";
console.log(nombreBiblioteca + " " + mensajeBienvenida);
console.log(`${nombreBiblioteca} ${mensajeBienvenida}`);

let librosEnEstante = 4500;
const MAX_PRESTAMOS_POR_USUARIO = 5;
console.log("Libros en estante:", librosEnEstante, " | Max. Préstamos:", MAX_PRESTAMOS_POR_USUARIO);

console.log("TIPOS DE DATOS EN LA BIBLIOTECA");
var tituloLibro = "Cien Años de Soledad";
console.log("string (Título del Libro):", tituloLibro);

var isbnCodigo = 9788497592429;
console.log("Tipo NUmerico (ISBN): ", typeof(isbnCodigo));

var libroPrestado = true;
console.log("Tipo Boolean (Libro Prestado): ", typeof(libroPrestado));

var fechaDevolucion = undefined;
console.log("Tipo Indefinido (Fecha Devolución Pendiente): ", typeof(fechaDevolucion));

var usuarioActivo = null;
console.log("Tipo Nula (Usuario No Logueado): ", typeof(usuarioActivo));

var idSeguro = Symbol("ID_LIBRO_123");
console.log("Tipo Simbolo (Clave Única de Recurso): ", typeof(idSeguro));

var numInventarioGrande = 9007199254740991n;
console.log("Tipo Big Entero (Registro de Inventario): ", typeof(numInventarioGrande));


const usuario = {
    nombre: "Kevin Diaz",
    codigo: "USR-001",
    esEstudiante: true
}

console.log("--- Objeto Usuario ---");
console.log(usuario);
console.log("Nombre:", usuario.nombre);
console.log("Código:", usuario.codigo);