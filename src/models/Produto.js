const mongoose = require('mongoose');

const Produto = mongoose.model('Produto', {
    codigo: String,
    nome: String,
    quantidade: Number,
    dataValidade: String,
    preco: Number,
    categoira: String,
})

module.exports = Produto;