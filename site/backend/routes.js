const { Router } = require('express'); 
const routes = Router();

const usuarioCtrl = require('./controller/UsuarioController');

// Tem colocar porque cai no CORS, o navegador impede a conexão
routes.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


routes.post('/usuario', usuarioCtrl.gravar);