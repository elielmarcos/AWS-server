const express = require('express');
const app = express();
const http = require('http');

const portExpress = 8000;

app.use(express.static('www'));

const server = app.listen(portExpress , function () {
    const port = server.address().port;
    console.log('EXPRESS RODANDO NA PORTA %s', port);
});