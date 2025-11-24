var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UsuarioBase = /** @class */ (function () {
    function UsuarioBase() {
        this.librosPrestados = 0;
    }
    UsuarioBase.prototype.modificarLibrosPrestados = function (cantidad) {
        this.librosPrestados = cantidad;
    };
    UsuarioBase.prototype.consultarLibrosPrestados = function () {
        return this.librosPrestados;
    };
    return UsuarioBase;
}());
var UsuarioEstudiante = /** @class */ (function (_super) {
    __extends(UsuarioEstudiante, _super);
    function UsuarioEstudiante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsuarioEstudiante.prototype.realizarAccion = function () {
        console.log('Realizando préstamo de libros de texto.');
    };
    return UsuarioEstudiante;
}(UsuarioBase));
var UsuarioDocente = /** @class */ (function (_super) {
    __extends(UsuarioDocente, _super);
    function UsuarioDocente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsuarioDocente.prototype.realizarAccion = function () {
        console.log('Realizando reserva de sala de lectura y materiales especializados.');
    };
    return UsuarioDocente;
}(UsuarioBase));
var usuarioEstudiante = new UsuarioEstudiante();
usuarioEstudiante.modificarLibrosPrestados(4);
usuarioEstudiante.realizarAccion();
console.log('Libros prestados por Estudiante:', usuarioEstudiante.consultarLibrosPrestados());
var usuarioDocente = new UsuarioDocente();
usuarioDocente.modificarLibrosPrestados(12);
usuarioDocente.realizarAccion();
console.log('Libros prestados por Docente:', usuarioDocente.consultarLibrosPrestados());
