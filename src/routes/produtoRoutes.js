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
router.get('/codigo/:codigo', async (req, res) => {
    const cod = req.params.codigo;

    console.log(cod);
    try {

        const produto = await Produto.findOne({ codigo: cod });

        if (!produto) {
            res.status(422).json({ message: 'O produto não foi encontrado' })
            return
        }

        res.status(200).json(produto);
        console.log(produto)
    } catch (error) {
        res.status(500).json({ error: error })
    }
});

// consulta produto com dataValidade vencida
router.get('/vencido', async (req, res) => {
    try {
        const dataAtual = new Date();

        const produtoVencido = await Produto.find({
            dataValidade: { $lt: dataAtual.toISOString() }
        });

        if (produtoVencido.length === 0) {
            res.status(422).json({ message: 'Nenhum produto vencido encontrado' });
            return;
        }

        console.log(produtoVencido)
        res.status(200).json(produtoVencido);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

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
router.put('/:codigo', async (req, res) => {
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

        res.status(200).json({ message: 'Produto atualizado com sucesso!' });
        return

    } catch (error) {
        res.status(500).json({ error: error });
    }


});

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
        res.status(200).json({ message: 'O produto foi removido com sucesso!' })
    } catch (error) {
        res.status(500).json(error)
    }


});
module.exports = router;