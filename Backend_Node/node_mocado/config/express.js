const express = require('express');
const routerUsers = require("../app/routes/usuarios");
const routerPosts = require("../app/routes/posts");
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
