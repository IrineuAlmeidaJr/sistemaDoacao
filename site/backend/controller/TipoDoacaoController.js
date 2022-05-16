const db = require('../model/Database');
const TipoDoacao = require('../model/TipoDoacao');

module.exports = {
    async gravar(request, response) {
        const {tipo} = request.body; // campos do formulario
        let tipodoacao = new TipoDoacao(0, tipo); // nova classe do tipo "TipoDoacao"
        const con = await db.conecta(); //  conecta ao banco        
        // Chama a classe usuário que tem o método gravar que por sua vez chama DAO
        await tipodoacao.gravar(db);

        return response.json(tipodoacao);
    },

    async alterar(request, response) {
        const {tipo} = request.body;
        let tipodoacao = new TipoDoacao(0, tipo);
        const con = await db.conecta();      
        await tipodoacao.alterar(db);
        return response.json(tipodoacao);
    },

    async excluir(request, response) {
        const {tipo_id} = request.params; // parametro de url
        const con = await db.conecta(); 
        let tipodoacao = await new TipoDoacao().procurarId(tipo_id, db);
        if(Object.keys(tipodoacao).length !== 0) {
            await tipodoacao.excluir(db);
        }
        return response.json(tipodoacao);
    },

    async listarPorId (request, response) {
        const {tipo_id} = request.params; // parametro de url
        const con = await db.conecta();
        let tipodoacao = await new TipoDoacao().procurarId(tipo_id, db);
        return response.json(tipodoacao);
    },

    async listar (request, response) {
        const con = await db.conecta();
        let tipodoacao = await new TipoDoacao().listar(db);

        return response.json(tipodoacao);
    }
}