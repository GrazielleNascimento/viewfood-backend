const express = require('express')

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.get('/', (res, req) => {

});


app.listen(3000)




