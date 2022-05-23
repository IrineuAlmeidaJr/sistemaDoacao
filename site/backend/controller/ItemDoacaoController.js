const db = require('../model/Database');
const ItemDoacao = require('../model/ItensDoacao');


module.exports = {
    
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