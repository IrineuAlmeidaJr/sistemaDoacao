const db = require('../model/Database');
const Doacao = require('../model/doacao');

module.exports = {
    async gravar(request, response) {
        const {dataDoacao, localDoacao_id, campanha_id, usu_id, status} = request.body; // campos do formulario
        
        let doacao = new Doacao(0, dataDoacao, localDoacao_id, campanha_id, usu_id, status);
        const con = await db.conecta(); //  conecta ao banco        
        console.log(doacao);
        await doacao.gravar(db);

        return response.json(doacao);
    },

    async alterar(request, response) {
        const {id, dataDoacao, localDoacao_id, campanha_id, usu_id, status} = request.body;
        let doacao = new Doacao(id, dataDoacao, localDoacao_id, campanha_id, usu_id, status);
        const con = await db.conecta();      
        await doacao.alterar(db);
        return response.json(doacao);
    },

    async excluir(request, response) {
        const {doacao_id} = request.params; // parametro de url
        console.log(doacao_id);
        const con = await db.conecta(); 
        let doacao = await new Doacao().procurarId(doacao_id, db);
        if(Object.keys(doacao).length !== 0) {
            await doacao.excluir(db);
        }
        return response.json(doacao);
    },

    async listarPorId (request, response) {
        const {doacao_id} = request.params; // parametro de url
        const con = await db.conecta();
        let doacao = await new Doacao().procurarId(doacao_id, db);
        return response.json(doacao);
    },

    async listar (request, response) {
        const con = await db.conecta();
        let doacao = await new Doacao().listar(db);

        return response.json(doacao);
    },

    async ultimo(request, response) {
        const con = await db.conecta();
        let doacao = await new Doacao().ultimo(db);
        console.log(doacao);
        return response.json(doacao);
    }
}