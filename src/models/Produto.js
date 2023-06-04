const mongoose = require('mongoose');

const Produto = mongoose.model('Produto', {
    codigo: String,
    nome: String,
    quantidade: String,
    dataValidade: String,
    preco: String,
    categoria: String,
})

module.exports = Produto;