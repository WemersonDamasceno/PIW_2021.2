const controller = require("../controllers/posts");
const auth = require("../controllers/auth");
module.exports = function(app){
    app.use("/api/posts", auth.checar);
    app.post("/api/posts", controller.cadastrarPosts)
    app.get("/api/posts", controller.listarPosts);
    app.get("/api/posts/:id", controller.buscarPost);
    app.delete("/api/posts/:id", controller.deletarPost);
    app.get("/api/posts/:id/comentarios", controller.porComentarios);

    
}