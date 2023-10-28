const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());
app.use(cors());

//rotas
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const produtoRoutes = require('./src/routes/produtoRoutes');
app.use('/usuario', usuarioRoutes);
app.use('/produto', produtoRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'teste' })
});

const dbUser = process.env.DB_USER
const dbPassoword = encodeURIComponent(`${process.env.DB_PASSWORD}`)


mongoose.connect(`mongodb+srv://${dbUser}:${dbPassoword}@cluster0.vsb6mt9.mongodb.net/?retryWrites=true&w=majority`
).then(() => {
    app.listen(3000)
    console.log("Conexao com o banco estabelecida")
}).catch((err) => console.log(err))