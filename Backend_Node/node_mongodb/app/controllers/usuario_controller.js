const { db } = require("../models/usuario");
const Usuario = require("../models/usuario");
const ViewUsuario = require("../views/usuario_view.js");

module.exports.putUser = function(req, res){
    let usuario = req.body;
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
