const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser())

app.post("/", (req, res) => {

    console.log('got a hit in default:>> ', req.body);
    res.status(200).send('server 1 up def reponse');
});

app.get("/s1", (req, res) => {
    console.log('got a hit in s1:>> ');
    res.status(200).send('server 1 up');
});

app.post("/s1Post", (req, res) => {

    console.log('got a hit in s1:>> ', req.body);
    res.status(200).send('server 1 up post reponse');
});

app.listen(3010);