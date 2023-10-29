# View Food NodeJS API integrado com MongoDB (Mongoose)

- Backend API REST para realizar as requisições do aplicativo [View Food](https://github.com/Grazielle127/viewfood) ao banco de dados MongoDB

## :round_pushpin: Rotas

##### Produtos - ```'/produto'```
- Cadastrar produto: POST ```'/'```
```json
    {
        "codigo":1,
        "nome":"Morango",
        "quantidade":2,
        "dataValidade":2023-10-28,
        "preco":15.96,
        "categoria":"Fruta"
    }
```
- Consultar todos os produtos: GET ```'/'```
- Consultar produto pelo codigo: GET ```'/codigo/{{codigo}}'```
- Consultar proutos vencidos: GET ```/vencido```
- Consultar produtos pela categoria: GET ```'/categoria/{{categoria}}'```
- Atualizar produto: GET ```'/{{codigo}}'```
- Deletar produto: DELETE ```'/{{codigo}}'```

##### Usuário - ```'/usuario'```
- Cadastrar usuario: POST ```'/'```
```json
    {
        "nome":"Grazielle Nascimento",
        "login":"grazielle.nascimento",
        "senha":"grazi123"
    }
```
- Consultar usuario: GET ```'/'```



## :bulb: Dicas
- Clone o projeto
- Renomeie o arquivo .env-example para .env e informe o seu usuario e senha de conexão ao MongoDB
- Instale as dependências com ```npm i```
- Abra o Terminal no VSCode e rode ```npm start```

## :package: Packages Utilizados
```
npm i express
npm i mongodb
npm i dotenv
npm i cors
npm i nodemon
```

##### Função de cada um dos pacotes
<table><thead><tr><th>Pacote</th><th>Descrição</th></tr></thead><tbody><tr><td><code>express</code></td><td>Framework web rápido, flexível e minimalista para Node.js.</td></tr><tr><td><code>mongodb</code></td><td>Driver oficial do MongoDB para Node.js.</td></tr><tr><td><code>dotenv</code></td><td>Carrega variáveis ​​de ambiente do arquivo .env para o processo.env.</td></tr><tr><td><code>cors</code></td><td>Middleware que permite a comunicação entre diferentes domínios na web.</td></tr><td><code>nodemon</code></td><td>Ferramenta que monitora as alterações no código-fonte e reinicia automaticamente o servidor.</td></tbody></table>


## :point_right: Integrantes
* [Grazielle Nascimento Ferreira](https://github.com/GrazielleNascimento)
* [Paulo Henrique Vieira Mujollo](https://github.com/PauloMujollo)