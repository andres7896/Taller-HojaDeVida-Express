const express = require('express');
const path = require('path');
const app = express();
const file = path.join(__dirname, '/views');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(`${file}/index.html`);
});

app.route('/experiencias').get((req, res) => {
    res.sendFile(`${file}/experiencias.html`)
})

app.route('/estudios').get((req, res) => {
    res.sendFile(`${file}/estudios.html`)
})

app.route('/perfil').get((req, res) => {
    res.sendFile(`${file}/perfil.html`)
})

app.route('/contacto').get((req, res) => {
    res.sendFile(`${file}/contacto.html`)
})

app.route('/mensaje').get((req, res) => {
    console.log(req.query.nom);
    console.log(req.query.message);
    if (req.query.nombre != '' || req.query.mensaje != '') {
        res.sendFile(`${file}/index.html`)
    }else{
        res.sendFile(`${file}/error.html`)
    }
});

app.listen(4200);