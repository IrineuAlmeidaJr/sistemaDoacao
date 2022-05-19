const beneficiario = require('../model/beneficiario');
const db = require('../model/Database.js');

module.exports = {
    
    async gravar(request, response) {
        const {id, nome, cpf, dataNascimento, usuarioId} = request.body; // campos do formulario
        let beneficiario = new beneficiario(0, nome, cpf, dataNascimento, usuarioId); // nova classe do tipo "TipoDoacao"
        const con = await db.conecta(); //  conecta ao banco
        // Chama a classe usuário que tem o método gravar que por sua vez chama DAO
        await beneficiario.gravar(db);
        return response.json(beneficiario);
    },

    async alterar(request, response) {
        const {id, nome, cpf, dataNascimento, usuarioId} = request.body;
        let beneficiario = new beneficiario(id, nome, cpf, dataNascimento, usuarioId);
        const con = await db.conecta();      
        await beneficiario.alterar(db);
        return response.json(beneficiario);
    },

    async excluir(request, response) {
        const {beneficiario_id} = request.params; // parametro de url
        const con = await db.conecta(); 
        let beneficiario = await new beneficiario().procurarId(beneficiario_id, db);
        if(Object.keys(beneficiario).length !== 0) {
            await beneficiario.excluir(db);
        }
        return response.json(beneficiario);
    },

    async listarPorId (request, response) {
        const {beneficiario_id} = request.params; // parametro de url
        const con = await db.conecta();
        let beneficiario = await new beneficiario().procurarId(beneficiario_id, db);
        return response.json(beneficiario);
    },

    async listar (request, response) {
        const con = await db.conecta();
        let beneficiario = await new beneficiario().listar(db);

        return response.json(beneficiario);
    }


}