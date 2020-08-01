const express = require('express');

let app = express();

app.get("/s2", (req, res) => {
    console.log('got a hit in s2:>> ');

    res.status(200).send('server 2 up');
});

app.listen(3060);