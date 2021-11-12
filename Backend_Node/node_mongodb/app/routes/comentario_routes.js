let controller = require("../controllers/comentario_controller");

module.exports = function(app){
    //1 - POST Recebe comentario e armazena
    app.post("/api/comentarios", controller.putComentario);
    //2 - GET Retorna todos os comentarios
    app.get("/api/comentarios", controller.listComentarios);
    //3 - GET Retorna comentario com um dado id
    app.get("/api/comentarios/:id", controller.getComentarioById);
    //4 - DELETE Remove comentario com id dado
    app.delete("/api/comentarios/:id", controller.deleteComentario);
}