function renderUsuario(usuario){
    return{
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha,
    }
}
module.exports.renderUsuario = renderUsuario;

function renderListUsuarios(usuarios){
    return usuarios.map(renderUsuario);
}
module.exports.renderListUsuarios = renderListUsuarios;