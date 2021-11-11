let posts = [
    {
        id: 1,
        texto: "Oi, tudo bem?",
        likes: 6,
    },
    {
        id: 2,
        texto: "O sangue de jesus tem poder",
        likes: 322,
    },
];

module.exports.putPosts = function(req,res){
    const {id, texto, likes} = req.body;
    const post = {
        id,
        texto,
        likes
    }
    posts.push(post);
    return res.status(201).json(post)
}

module.exports.getAllPosts = function(req, res){
    res.json(posts);
}

module.exports.getPostsById = function(req, res){
    let id = req.params.id;
    let post = posts.find(function(post){
        return post.id == id;
    })

    if(post){
        res.json(post);
    }else{
        res.status(404).json({mensagem: "Post não foi encontrado!"})
    }

}

module.exports.deletePost = function(req, res){
    let id = req.params.id;
    posts = posts.filter(function(post){
        return post.id != id;
    });
    res.json({mensagem: "O Post foi removido"});
}



