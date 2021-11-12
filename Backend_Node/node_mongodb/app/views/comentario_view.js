function renderOneComentario(comentario){
    return{
        id: comentario._id,
        texto: comentario.texto,
        id_usuario: comentario.usuario,
        id_post: comentario.posts,
    }
}
module.exports.renderOneComentario = renderOneComentario;

function renderListComentarios(comentarios){
    return comentarios.map(renderOneComentario);
}
module.exports.renderListComentarios = renderListComentarios;