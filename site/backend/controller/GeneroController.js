const db = require('../model/Database');
const Genero = require('../model/genero')

module.exports = {

    async gravar(request,response) {
        const {nome} = request.body;
        let genero = new Genero(0, nome);
        const con = await db.conecta();        
        await genero.gravar(db);
        return response.json(genero);
    },

    async alterar(request,response) {
        const {id, nome} = request.body;
        let genero = new Genero(id, nome);
        const con = await db.conecta();      
        await genero.alterar(db);
        return response.json(genero);
    },

    async excluir(request,response) {
        const {genero_id} = request.params;
        const con = await db.conecta(); 
        let genero = await new Genero().procurarId(genero_id, db);
        if(Object.keys(genero).length !== 0) {
            await genero.excluir(db);
        }
        return response.json(genero);
    },


    async listar (request, response) {
        const con = await db.conecta();
        let gen = await new Genero().listar(db);
        return response.json(gen);
    },



}    