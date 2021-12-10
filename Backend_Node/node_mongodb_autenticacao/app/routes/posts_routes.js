let controller = require("../controllers/posts_controller");
const auth = require("../controllers/auth");
module.exports = function(app){
    app.use("/api/posts", auth.checar) 
    //1 - POST Recebe post e armazena
    app.post("/api/posts", controller.putPosts);
    //2 - GET Retorna todos os posts
    app.get("/api/posts", controller.getAllPosts);
    //3 - GET Retorna post com um dado id
    app.get("/api/posts/:id", controller.getPostsById);
    //4 - DELETE Remove post com id dado
    app.delete("/api/posts/:id", controller.deletePost);
    //4 - Buscar todos os comentarios do post
    app.get("/api/posts/:id/comentarios", controller.BuscarComentariosPostById);
}