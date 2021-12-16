const Usuario = require("../models/usuario");
const Post = require("../models/post");
const userView = require("../views/usuarios");
const postsView = require("../views/posts");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.listarUsuarios = function(req, res){
    let promisse = Usuario.find().exec();
    promisse.then(function(users){
        res.status(200).json(userView.renderMany(users));
    }).catch(function(error){
        res.status(500).json({mensagem:"Falha!"})
    })
}

module.exports.buscarUsuario = function(req, res){
    let id = req.params.id;
    let promisse = Usuario.findById(id).exec();
    promisse.then(function(user){
        res.status(200).json(userView.render(user));
    }).catch(function(error){
        res.status(400).json({mensagem: "Usuário não encontrado!"});
    });
}

module.exports.cadastrarUsuarios = function(req, res){
    let user = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10),
    }

    let promisse = Usuario.create(user);
    promisse.then(function(user){
        res.status(200).json(userView.render(user));
    }).catch(function(error){
        res.status(400).json({mensagem: "Requisição falhou!"});
    })
}

module.exports.deletarUsuario = function(req, res){
    let id = req.params.id;
    let token = req.headers.token;
    let paypload = jwt.decode(token);
    let aut_id = paypload.id;
    if(id != aut_id){
        res.status(400).json({mensagem: "Id não permitido!"});
    } else{
        let promisse = Usuario.findByIdAndDelete(id);
         promisse.then(function(){
            res.status(200).json({mensagem: "Usuário deletado com sucesso!"});
        }).catch(function(error){
            res.status(400).json({mensagem: "Usuário não encontrado!"});
        })
    }
}

module.exports.porPosts = function(req, res){
    let id = req.params.id;
    let promise = Post.find({id_usuario:id});
    promise.then(function(posts){
        res.status(200).json(postsView.renderMany(posts));
    }).catch(function(error){
        res.status(500).json({mensagem: "Erro!"});
    });
}