let usuarios = [
    {
        id: 13,
        nome: "Wemerson",
        email: "wemerson@gmail.com",
        senha: "123"
    },
    {
        id: 21,
        nome: "Lucas",
        email: "lucas@gmail.com",
        senha: "123"
    },
    
];

module.exports.putUser = function(req, res){
    const {id, nome, email, senha} = req.body;
    const user = {
        id,
        nome,
        email,
        senha,
    };
    usuarios.push(user);
    return res.status(201).json(user);
}

module.exports.getUserById = function(req, res){
    let id = req.params.id;
    let usuario = usuarios.find(function(usuario){
        return usuario.id == id;
    });

    if(usuario){
        res.json(usuario);
    }else{
        res.status(404).json({mensagem: "Usuario não encontrado"});
    }
}

module.exports.listUsers = function(req, res){
    let usersRetorno = usuarios;
    if(req.query.nome){
        let nome = req.query.nome;
        usersRetorno = usuarios.filter(function(usuario){
            return usuario.nome == nome;
        });
    }
    res.json(usersRetorno);
}

module.exports.deleteUser = function(req,res){
    let id = req.params.id;
    usuarios = usuarios.filter(function(usuario){
        return usuario.id != id;
    });
    res.json({mensagem: "Usuario foi removido"});
}
