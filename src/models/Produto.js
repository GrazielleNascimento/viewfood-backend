const mongoose = require('mongoose');

const Produto = mongoose.model('Produto', {
    codigo: String,
    nome: String,
    quantidade: Number,
    dataValidade: Date,
    preco: Number,
    categoria: String,
})

module.exports = Produto;