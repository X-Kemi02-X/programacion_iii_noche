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
var _05_herencia_mp_1 = require("./05_herencia_mp");
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.periodicidad = 'Mensual';
        return _this;
    }
    Revista.prototype.setPeriodicidad = function (periodicidad) {
        this.periodicidad = periodicidad;
    };
    Revista.prototype.getPeriodicidad = function () {
        return this.periodicidad;
    };
    Revista.prototype.indexar = function () {
        console.log("Revista ".concat(this.identificador, " indexada como publicaci\u00F3n peri\u00F3dica."));
    };
    return Revista;
}(_05_herencia_mp_1.Recurso));
var revistaCientifica = new Revista('R-C-002');
revistaCientifica.setPeriodicidad('Trimestral');
console.log('ID del Recurso:', revistaCientifica.identificador);
console.log('Periodicidad:', revistaCientifica.getPeriodicidad());
revistaCientifica.indexar();
