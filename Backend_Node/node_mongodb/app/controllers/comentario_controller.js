const { db } = require("../models/comentario");
const Comentario = require("../models/comentario");
const ViewComentario = require("../views/comentario_view");

module.exports.putComentario = function(req, res){
    let comentario = req.body;
    let promisse = Comentario.create(comentario);
    //o then é quando o banco retorna
    promisse.then(function(comentario){
        res.status(201).json(ViewComentario.renderOneComentario(comentario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Ocorreu um erro na requisição", error: error.message});
    });
}

module.exports.getComentarioById = function(req, res){
    let id = req.params.id;
    let promisse = Comentario.findById(id).exec();
    promisse.then(function(comentario){
        res.status(200).json(ViewComentario.renderOneComentario(comentario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Ocorreu um erro!", error: error.message});
    })
}

module.exports.listComentarios = function(req, res){
    let promisse = Comentario.find().exec();
    promisse.then(function(comentarios){
        res.status(200).json(ViewComentario.renderListComentarios(comentarios));
    }).catch(function(error){
        res.status(500).json({mensagem: "Ocorreu um erro.", error: error.message});
    });
}

module.exports.deleteComentario = function(req,res){
    let id = req.params.id;
    let promisse = Comentario.findByIdAndDelete(id);
    promisse.then(function(comentario){
        res.status(200).json(ViewComentario.renderOneComentario(comentario));
    }).catch(function(error){
        res.status(400).json({mensagem: "Ocorreu um erro.", error: error.message});
    });
   
}
