const express = require('express');
const routerUsers = require("../app/routes/usuarios_routes");
const routerPosts = require("../app/routes/posts_routes");
module.exports = function(){
    var app = express();
    app.set("port", 8393);
    
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    app.use(express.static('./public'));
    routerUsers(app);
    routerPosts(app);
    return app;
}
