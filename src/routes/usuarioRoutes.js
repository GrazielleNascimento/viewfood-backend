const router = require('express').Router();

const Usuario = require('../models/Usuario');


router.get('/', async (req, res) => {
    try {
        const usuario = await Usuario.find()

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.post('/novo', async (req, res) => {
    const { nome, usuario, senha } = req.body;

    if (!nome || !usuario || !senha) {
        res.status(422).json({ error: 'os campso necessários nao foram preecnhidos!' });
        return;
    }

    const usua = {
        nome,
        usuario,
        senha
    };

    // insere o novo usuario no banco
    try {
        await Usuario.create(usua);
        res.status(201).json({ message: 'novo usuario cadastrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});



module.exports = router;