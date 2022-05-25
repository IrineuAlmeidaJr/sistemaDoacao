const db = require('../model/Database');
const ItemDoacao = require('../model/ItensDoacao');


module.exports = {

    async gravar(request, response) {
        const {id, nome, qtde, tipoDoa_id, uniMed_id, tam_id, genero_id, doa_id} = request.body; // campos do formulario
        let itens = new ItemDoacao(0, nome, qtde, tipoDoa_id, uniMed_id, tam_id, genero_id, doa_id);
        const con = await db.conecta(); //  conecta ao banco        
        
        await itens.gravar(db);

        return response.json(itens);
    },

    async alterar(request, response) {
        const {id, nome, qtde, tipoDoa_id, uniMed_id, tam_id, genero_id, doa_id} = request.body;
        let itens = new ItemDoacao(id, nome, qtde, tipoDoa_id, uniMed_id, tam_id, genero_id, doa_id);
        const con = await db.conecta();      
        await itens.alterar(db);
        return response.json(itens);
    },

    async excluir(request, response) {
        const {id} = request.params; // parametro de url
        const con = await db.conecta(); 
        let itens = await new ItemDoacao().procurarId(id, db);
        if(Object.keys(itens).length !== 0) {
            await itens.excluir(db);
        }
        return response.json(itens);
    },
    
    async listar (request, response) { 
        const con = await db.conecta();
        let lis = await new ItemDoacao().listar(db);        
        return response.json(lis);
    },

    async listarDetalhado (request, response) { 
        const con = await db.conecta();
        let lis = await new ItemDoacao().listarDetalhado(db);        
        return response.json(lis);
    },



}    