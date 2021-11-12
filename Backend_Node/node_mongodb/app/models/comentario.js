const mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        texto: {
            type: 'String',
            required: true,
        },
        posts: {
            type: mongoose.Schema.ObjectId,
            ref: "Posts",
        },
        usuario: {
            type: mongoose.Schema.ObjectId,
            ref: "Usuario",
        },
    });
    return mongoose.model("Comentario", schema);
}();