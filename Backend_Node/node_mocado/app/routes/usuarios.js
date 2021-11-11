let controller = require("../controllers/usuarios");

module.exports = function(app){
    //1 - POST Recebe usuário e armazena
    app.post("/api/usuarios", controller.putUser);
    //2 - GET Retorna todos os usuários
    app.get("/api/usuarios", controller.listUsers);
    //3 - GET Retorna usuário com um dado id
    app.get("/api/usuarios/:id", controller.getUserById);
    //4 - DELETE Remove usuário com id dado
    app.delete("/api/usuarios/:id", controller.deleteUser);

}