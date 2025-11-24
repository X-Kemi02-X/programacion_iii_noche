var Usuario = /** @class */ (function () {
    function Usuario(username) {
        this.password = '12345';
        this.username = username;
    }
    Usuario.prototype.autenticar = function (password) {
        return password == this.password;
    };
    return Usuario;
}());
var user = new Usuario('higueraf');
var autenticacion = user.autenticar('12345');
if (autenticacion) {
    console.log('usario exitosamente autenticado');
}
else {
    console.log('acceso denegado');
}
