const mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        texto: {
            type: 'String',
            required: true,
        },
        likes: {
            type: 'Number',
            required: true,
        },
        id_usuario: {
            type: 'String',
            required: true,
        },
    });
    return mongoose.model("Posts", schema);
}();