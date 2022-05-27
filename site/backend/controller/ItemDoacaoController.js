const db = require('../model/Database');
const ItemDoacao = require('../model/ItensDoacao');


module.exports = {

    async gravar(request, response) {
        const {id, nome, quantidade, tipoDoacao_id, unidadeMedida_id, tamanho_id, genero_id, doacao_id} = request.body; // campos do formulario
        let itens = new ItemDoacao(0, nome, quantidade, tipoDoacao_id, unidadeMedida_id, tamanho_id, genero_id, doacao_id);
        const con = await db.conecta(); //  conecta ao banco        
        console.log(itens);
        await itens.gravar(db);
        console.log(itens);
        return response.json(itens);
    },

    async alterar(request, response) {
        const {id, nome, quantidade, tipoDoacao, uniMedida, tamanho, genero, doacao_id} = request.body;
        let itens = new ItemDoacao(id, nome, quantidade, tipoDoacao, uniMedida, tamanho, genero, doacao_id);
        const con = await db.conecta();      
        await itens.alterar(db);
        return response.json(itens);
    },

    async excluir(request, response) {
        const {itens_id} = request.params; // parametro de url
        const con = await db.conecta(); 
        let itens = await new ItemDoacao().procurarId(itens_id, db);
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