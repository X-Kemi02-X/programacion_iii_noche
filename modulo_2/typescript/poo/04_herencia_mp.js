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
var MiembroBiblioteca = /** @class */ (function () {
    function MiembroBiblioteca(codigoUsuario) {
        this.pinAcceso = '4321';
        this.codigoUsuario = codigoUsuario;
    }
    MiembroBiblioteca.prototype.autenticar = function (pin) {
        return pin === this.pinAcceso;
    };
    return MiembroBiblioteca;
}());
var Bibliotecario = /** @class */ (function (_super) {
    __extends(Bibliotecario, _super);
    function Bibliotecario(codigoUsuario, rol) {
        var _this = _super.call(this, codigoUsuario) || this;
        _this.rol = rol;
        return _this;
    }
    Bibliotecario.prototype.reporteAcceso = function () {
        console.log("El usuario ".concat(this.codigoUsuario, " (Rol: ").concat(this.rol, ") ha iniciado sesi\u00F3n."));
    };
    return Bibliotecario;
}(MiembroBiblioteca));
var bibliotecarioAdmin = new Bibliotecario('B-101', 'Administrador');
var accesoConcedido = bibliotecarioAdmin.autenticar('4321');
if (accesoConcedido) {
    console.log("Miembro ".concat(bibliotecarioAdmin.codigoUsuario, " autenticado correctamente."));
    bibliotecarioAdmin.reporteAcceso();
}
else {
    console.log('Acceso denegado: PIN incorrecto.');
}
