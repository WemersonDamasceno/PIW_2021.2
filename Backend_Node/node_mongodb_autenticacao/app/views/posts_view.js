function renderOnePosts(post){
    return{
        id: post._id,
        texto: post.texto,
        likes: post.likes,
        id_usuario: post.id_usuario,
    }
}
module.exports.renderOnePosts = renderOnePosts;

function renderListPosts(posts){
    return posts.map(renderOnePosts);
}
module.exports.renderListPosts = renderListPosts;