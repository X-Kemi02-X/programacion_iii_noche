"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca) {
        this.marca = marca;
    }
    Vehiculo.prototype.moverse = function () {
        console.log(this.marca, 'se encuentra en movimiento');
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
