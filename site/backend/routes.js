const { Router } = require('express'); 
const routes = Router();

const usuarioCtrl = require('./controller/UsuarioController');
const tamanhoCtrl = require('./controller/TamanhoController')
const campanhaDoacaoCtrl = require('./controller/CampanhaDoacaoController')
const inscricaoCtrl = require('./controller/InscricaoController')
const tipoDoacao = require('./controller/TipoDoacaoController')
const generoCtrl = require('./controller/GeneroController')
const beneficiarioCtrl = require('./controller/BeneficiarioController')

// Tem colocar porque cai no CORS, o navegador impede a conexão
routes.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


// Rotas usuario
routes.post('/usuario', usuarioCtrl.gravar);
routes.put('/usuario', usuarioCtrl.alterar);
routes.delete('/usuario/:usu_id',usuarioCtrl.excluir);
routes.get('/usuId/:usu_id', usuarioCtrl.listarPorId);
routes.get('/usuario/:usu_nome', usuarioCtrl.listarPorNome);
// Tem usar usu_nome ou o nome do campo que está no banco se não da erro
routes.get('/usuario', usuarioCtrl.listar);    

//Rotas tamanho
routes.get('/tamanho',tamanhoCtrl.buscarTodos)
routes.post('/tamanho',tamanhoCtrl.gravar)
routes.put('/tamanho',tamanhoCtrl.alterar)
routes.delete('/tamanho',tamanhoCtrl.excluir)
routes.get('/tamanhoi',tamanhoCtrl.buscarId)

// Rotas Genero
routes.post('/genero', generoCtrl.gravar);
routes.delete('/genero/:genero_id',generoCtrl.excluir)
routes.get('/genero', generoCtrl.listar); 


//Rotas campanha doação
routes.get('/campanhaDoacao', campanhaDoacaoCtrl.buscarTodos)
routes.post('/campanhaDoacao', campanhaDoacaoCtrl.gravar)
routes.put('/campanhaDoacao', campanhaDoacaoCtrl.alterar)
routes.delete('/campanhaDoacao', campanhaDoacaoCtrl.excluir)
routes.get('/campanhaDoacaoi', campanhaDoacaoCtrl.buscarId)

//Rotas inscricao
routes.get('/inscricao', inscricaoCtrl.buscarTodos)
routes.post('/inscricao', inscricaoCtrl.gravar)
routes.delete('/inscricao', inscricaoCtrl.excluir)
routes.get('/inscricaoi', inscricaoCtrl.buscarId)

// Rotas Tipo Doação
routes.post('/tipoDoacao', tipoDoacao.gravar);
routes.get('/tipoDoacao', tipoDoacao.listar);
routes.put('/tipoDoacao', tipoDoacao.alterar);
routes.delete('/tipoDoacao/:tipo_id', tipoDoacao.excluir);
routes.get('/tipoDoacao/:tipo_id', tipoDoacao.listarPorId);

//rotas beneficiario
routes.post('/beneficiario', beneficiarioCtrl.gravar);
routes.get('/beneficiario', beneficiarioCtrl.buscarTodos);
routes.put('/beneficiario', beneficiarioCtrl.alterar);
routes.delete('/beneficiario/:beneficiario_id', beneficiarioCtrl.excluir);
routes.get('/beneficiario/:beneficiario_id', beneficiarioCtrl.buscarId);


// module.exports = {routes}; 
module.exports = routes; // Estava dando erro de rota, tem exportar sem ser objeto