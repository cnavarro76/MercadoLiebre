const express = require('express');

const app = express();

const path = require('path');

const port = 3030;

app.use(express.static('public'));

app.listen (port, () => console.log(`Servidor corriendo en el puerto ${port}`));

app.get('/', function(req,res) {
    res.sendFile(path.resolve(__dirname + '/views/home.html'));
});

app.get('/login', function(req,res) {
    res.sendFile(path.resolve(__dirname + '/views/login.html'));
});

app.get('/register', function(req,res) {
    res.sendFile(path.resolve(__dirname + '/views/register.html'));
});

app.get('/', function(req,res) {
    res.sendFile(path.resolve(__dirname + '/views/ofertas.html'));
});

app.get('/', function(req,res) {
    res.sendFile(path.resolve(__dirname + '/views/tiendas oficiales.html'));
});

app.get('/', function(req,res) {
    res.sendFile(path.resolve(__dirname + '/views/vender.html'));
});

app.get('/', function(req,res) {
    res.sendFile(path.resolve(__dirname + '/views/ayuda.html'));
});





app.get('/', function(req,res) {
    res.sendFile(path.resolve(__dirname + '/views/mis compras.html'));
});