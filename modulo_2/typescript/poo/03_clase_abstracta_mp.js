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
var Recurso = /** @class */ (function () {
    function Recurso(titulo) {
        this.titulo = titulo;
    }
    Recurso.prototype.prestar = function () {
        console.log("Recurso '".concat(this.titulo, "' ha sido prestado."));
    };
    return Recurso;
}());
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(titulo, isbn) {
        var _this = _super.call(this, titulo) || this;
        _this.isbn = isbn;
        return _this;
    }
    Libro.prototype.obtenerUbicacion = function () {
        console.log("Ubicaci\u00F3n: Estante de Ficci\u00F3n - ISBN ".concat(this.isbn));
    };
    return Libro;
}(Recurso));
var elHobbit = new Libro('El Hobbit', '978-0547928227');
elHobbit.prestar();
elHobbit.obtenerUbicacion();
