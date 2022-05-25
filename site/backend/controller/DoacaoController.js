const db = require('../model/Database');
const Doacao = require('../model/doacao');

module.exports = {
    async gravar(request, response) {
        const {dataDoacao, localDoacao_id, camapanha_id, usu_id, status} = request.body; // campos do formulario
        let doacao = new Doacao(0, dataDoacao, localDoacao_id, camapanha_id, usu_id, status);
        const con = await db.conecta(); //  conecta ao banco        
        
        await doacao.gravar(db);

        return response.json(doacao);
    },

    async alterar(request, response) {
        const {id, dataDoacao, localDoacao_id, camapanha_id, usu_id, status} = request.body;
        let doacao = new Doacao(id, dataDoacao, localDoacao_id, camapanha_id, usu_id, status);
        const con = await db.conecta();      
        await doacao.alterar(db);
        return response.json(doacao);
    },

    async excluir(request, response) {
        const {id} = request.params; // parametro de url
        const con = await db.conecta(); 
        let doacao = await new Doacao().procurarId(id, db);
        if(Object.keys(doacao).length !== 0) {
            await doacao.excluir(db);
        }
        return response.json(doacao);
    },

    async listarPorId (request, response) {
        const {id} = request.params; // parametro de url
        const con = await db.conecta();
        let doacao = await new Doacao().procurarId(id, db);
        return response.json(doacao);
    },

    async listar (request, response) {
        const con = await db.conecta();
        let doacao = await new Doacao().listar(db);

        return response.json(doacao);
    }
}