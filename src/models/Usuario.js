const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
    nome: String,
    local: String,
    email: String,
    senha: String
})

module.exports = Usuario;