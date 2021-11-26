let controller = require("../controllers/usuario_controller");
let auth = require("../controllers/auth");
module.exports = function(app){
    //0 - Login
    app.post("/api/usuarios/signin", auth.logar);
    //1 - POST Recebe usuário e armazena
    app.post("/api/usuarios", controller.putUser);
    //2 - GET Retorna todos os usuários
    app.get("/api/usuarios", controller.listUsers);
    //3 - GET Retorna usuário com um dado id
    app.get("/api/usuarios/:id", controller.getUserById);
    //4 - DELETE Remove usuário com id dado
    app.delete("/api/usuarios/:id", controller.deleteUser);
    //5 - Buscar os comentarios feitos pelo user
    app.get("/api/usuarios/:id/comentarios", controller.buscarComentarios);
    //5 - Buscar os posts feitos pelo user
    app.get("/api/usuarios/:id/posts", controller.buscarPostsById);

}