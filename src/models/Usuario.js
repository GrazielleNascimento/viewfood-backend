const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
    nome: String,
    usuario: String,
    senha: String
})

module.exports = Usuario;