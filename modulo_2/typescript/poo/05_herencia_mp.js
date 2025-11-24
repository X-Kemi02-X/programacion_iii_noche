"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recurso = void 0;
var Recurso = /** @class */ (function () {
    function Recurso(identificador) {
        this.identificador = identificador;
    }
    Recurso.prototype.indexar = function () {
        console.log("Recurso con ID ".concat(this.identificador, " ha sido indexado y catalogado."));
    };
    return Recurso;
}());
exports.Recurso = Recurso;
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(identificador, titulo) {
        var _this = _super.call(this, identificador) || this;
        _this.titulo = titulo;
        return _this;
    }
    Libro.prototype.mostrarTitulo = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ". ID: ").concat(this.identificador));
    };
    return Libro;
}(Recurso));
var revistaDigital = new Recurso('REV-2025-001');
revistaDigital.indexar();
var libroFisico = new Libro('LIB-998-A', 'El Misterio del Estante 7');
libroFisico.mostrarTitulo();
libroFisico.indexar();
