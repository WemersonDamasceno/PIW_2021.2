const express = require('express');
const routesUser = require('../app/routes/usuarios');
const routesPosts = require('../app/routes/posts');
const routesComentarios = require('../app/routes/comentarios');
const bodyParser = require("body-parser");

module.exports = function(){
    let app = express();
    app.set('port', 8000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static('./public'));
    routesUser(app);
    routesPosts(app);
    routesComentarios(app);
    return app;
}