interface UsuarioLogin {
    id: number,
    username: string,
    password: string
}

const usuarioParaLogin: UsuarioLogin = {
    id: 1,
    username: 'kevind',
    password: '12345',
}
function login(usario: UsuarioLogin): void{
    if (usuarioParaLogin.password=='12345' && usario.username=='higueraf'){
        console.log('usuario ${usuario.username} existosamente autenticado');
    } else {
        console.log('acceso denegado')
    }
}