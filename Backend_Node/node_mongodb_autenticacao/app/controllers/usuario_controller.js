const { db } = require("../models/usuario");
const Usuario = require("../models/usuario");
const ViewUsuario = require("../views/usuario_view.js");
const ViewPosts = require("../views/posts_view.js");
const Comentario = require("../models/comentario");
const Posts = require("../models/posts");
const bcrypt = require("bcrypt");

module.exports.putUser = function(req, res){
    let usuario = {
        nome : req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10),
    }
    let promisse = Usuario.create(usuario);
    //o then é quando o banco retorna
    promisse.then(function(usuario){
        res.status(201).json(ViewUsuario.renderUsuario(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Ocorreu um erro na requisição", error: error.message});
    });
}

module.exports.getUserById = function(req, res){
    let id = req.params.id;
    let promisse = Usuario.findById(id).exec();
    promisse.then(function(usuario){
        res.status(200).json(ViewUsuario.renderUsuario(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Ocorreu um erro!", error: error.message});
    })
}

module.exports.listUsers = function(req, res){
    let promisse = Usuario.find().exec();
    promisse.then(function(usuarios){
        res.status(200).json(ViewUsuario.renderListUsuarios(usuarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "Ocorreu um erro.", error: error.message});
    });
}

module.exports.deleteUser = function(req,res){
    let id = req.params.id;
    let promisse = Usuario.findByIdAndDelete(id);
    promisse.then(function(usuario){
        res.status(200).json(ViewUsuario.renderUsuario(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Ocorreu um erro.", error: error.message});
    });
}

module.exports.buscarComentarios = function(req, res){
    let id = req.params.id;
    let promisse = Comentario.find({usuario:id}).populate("Posts").exec();
    promisse.then(function(comentarios){
        res.status(200).json(comentarios);
    }).catch(function(error){
        res.status(500).json({mensagem: "Ocorreu um erro", error: error.message});
    })
}


module.exports.buscarPostsById = function(req, res){
    let id = req.params.id;
    let promisse = Posts.find({id_usuario:id});
    promisse.then(function(posts){
        res.status(200).json(ViewPosts.renderListPosts(posts));
    }).catch(function(error){
        res.status(500).json({mensagem: "Ocorreu um erro", error: error.message});
    })
}