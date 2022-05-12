const tamanhoCtrl = require('../controller/tamanhocontroller')

module.exports = app =>{
    app.get('/tamanho',tamanhoCtrl.buscarTodos)
    app.post('/tamanho',tamanhoCtrl.gravar)
    app.put('/tamanho',tamanhoCtrl.alterar)
    app.delete('/tamanho',tamanhoCtrl.excluir)
    app.get('/tamanhoi',tamanhoCtrl.buscarId)
}