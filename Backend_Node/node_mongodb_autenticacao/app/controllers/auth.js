const Usuario = require("../models/usuario")
const bcrypt = require("bcrypt");

module.exports.logar = function(req, res){
    Usuario.findOne({email : req.body.email}).then(function(user){
        if(bcrypt.compareSync(req.body.senha, user.senha)){
            res.status(200).send("Credenciais ok!");
        }else{
            res.status(401).send("Credenciais erradas!");
        }
    }).catch(function(error){
        res.status(401).send("Credenciais erradas!");
    });
}