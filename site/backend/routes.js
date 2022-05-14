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
routes.put('/usuario', usuarioCtrl.alterar);
routes.delete('/usuario/:usu_id',usuarioCtrl.excluir);
routes.get('/usuId/:usu_id', usuarioCtrl.listarPorId);
routes.get('/usuario/:usu_nome', usuarioCtrl.listarPorNome);
// Tem usar usu_nome ou o nome do campo que está no banco se não da erro
routes.get('/usuario', usuarioCtrl.listar);    


module.exports = routes;