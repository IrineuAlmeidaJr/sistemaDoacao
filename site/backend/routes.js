const { Router } = require('express'); 
const routes = Router();

const usuarioCtrl = require('./controller/UsuarioController');
const tamanhoCtrl = require('./controller/TamanhoController')
const campanhaDoacaoCtrl = require('./controller/CampanhaDoacaoController')
const inscricaoCtrl = require('./controller/InscricaoController')
const tipoDoacao = require('./controller/TipoDoacaoController')
const generoCtrl = require('./controller/GeneroController')
const beneficiarioCtrl = require('./controller/BeneficiarioController')
const unidadeCtrl = require('./controller/UnidadeController')
const localDoacaoCtrl = require('./controller/LocalDoacaoController')
const itensDoacaoCtrl = require('./controller/itemDoacaoController')
const doacaoCtrl = require('./controller/DoacaoController')

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
routes.get('/usuarioLogin/:usu_email', usuarioCtrl.buscaEmail);
// Tem usar usu_nome ou o nome do campo que está no banco se não da erro
routes.get('/usuario', usuarioCtrl.listar);    

//Rotas tamanho
routes.get('/tamanho',tamanhoCtrl.buscarTodos)
routes.post('/tamanho',tamanhoCtrl.gravar)
routes.put('/tamanho',tamanhoCtrl.alterar)
routes.delete('/tamanho',tamanhoCtrl.excluir)
routes.get('/tamanhoi',tamanhoCtrl.buscarId)
routes.get('/tamanhoNome/:tam_nome',tamanhoCtrl.listarPorNome)

// Rotas Genero
routes.post('/genero', generoCtrl.gravar);
routes.put('/genero', generoCtrl.alterar);
routes.delete('/genero/:genero_id',generoCtrl.excluir)
routes.get('/genero', generoCtrl.listar);
routes.get('/generoNome/:genero_nome', generoCtrl.listarPorNome); 


//Rotas campanha doação
routes.get('/campanhaDoacao', campanhaDoacaoCtrl.buscarTodos)
routes.post('/campanhaDoacao', campanhaDoacaoCtrl.gravar)
routes.put('/campanhaDoacao', campanhaDoacaoCtrl.alterar)
routes.delete('/campanhaDoacao', campanhaDoacaoCtrl.excluir)
routes.get('/campanhaDoacao/:cod', campanhaDoacaoCtrl.buscarId)

//Rotas inscricao
routes.get('/inscricao', inscricaoCtrl.buscarTodos)
routes.post('/inscricao', inscricaoCtrl.gravar)
routes.delete('/inscricao', inscricaoCtrl.excluir)
routes.get('/inscricaoi', inscricaoCtrl.buscarId)
routes.get('/inscricao/busca/:id',inscricaoCtrl.buscaCancela)

// Rotas Tipo Doação
routes.post('/tipoDoacao', tipoDoacao.gravar);
routes.get('/tipoDoacao', tipoDoacao.listar);
routes.put('/tipoDoacao', tipoDoacao.alterar);
routes.delete('/tipoDoacao/:tipo_id', tipoDoacao.excluir);
routes.get('/tipoDoacao/:tipo_id', tipoDoacao.listarPorId);
routes.get('/tipoDoacaoNome/:tipo_nome', tipoDoacao.listarPorNome);

//rotas beneficiario
routes.post('/beneficiario', beneficiarioCtrl.gravar);
routes.get('/beneficiario', beneficiarioCtrl.listar);
routes.put('/beneficiario', beneficiarioCtrl.alterar);
routes.delete('/beneficiario/:beneficiario_id', beneficiarioCtrl.excluir);
routes.get('/beneficiario/:beneficiario_id', beneficiarioCtrl.listarPorId);
routes.get('/beneficiario/dependente/:id',beneficiarioCtrl.listarDependente)

//Rotas unidade de medida
routes.get('/unidade',unidadeCtrl.buscarTodos)
routes.post('/unidade',unidadeCtrl.gravar)
routes.put('/unidade',unidadeCtrl.alterar)
routes.delete('/unidade', unidadeCtrl.excluir)
routes.get('/unidadei',unidadeCtrl.buscarId)
routes.get('/unidadeNome/:uni_nome',unidadeCtrl.listarPorNome)

//Rotas LocalDoacao
routes.post('/localDoacao', localDoacaoCtrl.gravar);
routes.get('/localDoacao', localDoacaoCtrl.listar);
routes.put('/localDoacao', localDoacaoCtrl.alterar);
routes.delete('/localDoacao/:local_id', localDoacaoCtrl.excluir);
routes.get('/localDoacao/:local_id', localDoacaoCtrl.listarPorId);

// Rotas ItensDoacao
routes.post('/itensDoacao', itensDoacaoCtrl.gravar);
routes.put('/itensDoacao', itensDoacaoCtrl.alterar);
routes.delete('/itensDoacao/:itens_id', itensDoacaoCtrl.excluir);
routes.get('/itensDoacao', itensDoacaoCtrl.listar); 
routes.get('/itensDoacaoDetalhado', itensDoacaoCtrl.listarDetalhado);

// Rotas Doacao
routes.post('/doacao', doacaoCtrl.gravar);
routes.get('/doacao', doacaoCtrl.listar);
routes.put('/doacao', doacaoCtrl.alterar);
routes.delete('/doacao/:doacao_id', doacaoCtrl.excluir);
routes.get('/doacao/:doacao_id', doacaoCtrl.listarPorId);
routes.get('/doacaoUltimo', doacaoCtrl.ultimo);

// module.exports = {routes}; 
module.exports = routes; // Estava dando erro de rota, tem exportar sem ser objeto