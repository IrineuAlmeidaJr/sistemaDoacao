const tamanhoCtrl = require('../controller/TamanhoController')
const campanhaDoacaoCtrl = require('../controller/CampanhaDoacaoController')

module.exports = app =>{
    //Rotas tamanho
    app.get('/tamanho',tamanhoCtrl.buscarTodos)
    app.post('/tamanho',tamanhoCtrl.gravar)
    app.put('/tamanho',tamanhoCtrl.alterar)
    app.delete('/tamanho',tamanhoCtrl.excluir)
    app.get('/tamanhoi',tamanhoCtrl.buscarId)

    //Rotas campanha doação
    app.get('/campanhaDoacao', campanhaDoacaoCtrl.buscarTodos)
    app.post('/campanhaDoacao', campanhaDoacaoCtrl.gravar)
    app.put('/campanhaDoacao', campanhaDoacaoCtrl.alterar)
    app.delete('/campanhaDoacao', campanhaDoacaoCtrl.excluir)
    app.get('/campanhaDoacaoi', campanhaDoacaoCtrl.buscarId)
}