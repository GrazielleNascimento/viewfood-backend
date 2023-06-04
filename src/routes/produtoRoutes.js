const router = require('express').Router();

const Produto = require('../models/Produto');

// consulta todos os produtos
router.get('/', async (req, res) => {
    try {
        const produto = await Produto.find()

        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

//consulta um produto pelo codigo
router.get('/:codigo', async (req, res) => {
    const cod = req.params.codigo;

    try {

        const produto = await Produto.findOne({ codigo: cod });

        if (!produto) {
            res.status(422).json({ message: 'O produto nao foi encontrado' })
            return
        }

        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

// cadastra um novo produto
router.post('/novo', async (req, res) => {
    const { codigo, nome, quantidade, dataValidade, preco, categoria } = req.body;

    if (!codigo || !nome || !quantidade || !dataValidade || !preco || !categoria) {
        res.status(422).json({ error: 'Os campos necessários nao foram preenchidos!' });
        return;
    }

    const prod = {
        codigo,
        nome,
        quantidade,
        dataValidade,
        preco,
        categoria
    };

    console.log(prod);

    // insere o novo produto no banco
    try {
        await Produto.create(prod);
        res.status(201).json({ message: 'novo produto cadastrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

// atualiza um produto
router.patch('/:codigo', async (req, res) => {
    const cod = req.params.codigo;

    const { codigo, nome, quantidade, dataValidade, preco, categoria } = req.body;

    const prod = {
        codigo,
        nome,
        quantidade,
        dataValidade,
        preco,
        categoria
    };

    try {
        const atualizaProduto = await Produto.updateOne({ codigo: cod }, prod);

        if (atualizaProduto.matchedCount === 0) {
            res.status(422).json({ message: 'O produto nao foi encontrado para atualizar' })
            return;
        }

        res.status(200).json(prod);
        return

    } catch (error) {
        res.status(500).json({ error: error });
    }


})

// deleta um produto
router.delete('/:codigo', async (req, res) => {
    const cod = req.params.codigo;

    const produto = await Produto.findOne({ codigo: cod });

    if (!produto) {
        res.status(422).json({ message: 'O produto nao foi encontrado' })
        return
    }

    try {

        await Produto.deleteOne({ codigo: cod })
        res.status(200).json({ message: 'O produto foi removido' })
    } catch (error) {
        res.status(500).json(error)
    }


})
module.exports = router;