const { db } = require("../models/posts.js");
const Posts = require("../models/posts.js");
const ViewPost = require("../views/posts_view.js");

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
    let post = req.body;
    let promisse = Posts.create(post);
    //o then é quando o banco retorna
    promisse.then(function(post){
        res.status(201).json(ViewPost.renderOnePosts(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "Ocorreu um erro na requisição", error: error.message});
    });
}

module.exports.getAllPosts = function(req, res){
    let promisse = Posts.find().exec();
    promisse.then(function(posts){
        res.status(200).json(ViewPost.renderListPosts(posts));
    }).catch(function(error){
        res.status(500).json({mensagem: "Ocorreu um erro.", error: error.message});
    });
}

module.exports.getPostsById = function(req, res){
    let id = req.params.id;
    let promisse = Posts.findById(id).exec();
    promisse.then(function(post){
        res.status(200).json(ViewPost.renderOnePosts(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "Ocorreu um erro!", error: error.message});
    });
}

module.exports.deletePost = function(req, res){
    let id = req.params.id;
    let promisse = Posts.findByIdAndDelete(id);
    promisse.then(function(post){
        res.status(200).json(ViewPost.renderOnePosts(post));
    }).catch(function(error){
        res.status(400).json({mensagem: "Ocorreu um erro.", error: error.message});
    });
}



