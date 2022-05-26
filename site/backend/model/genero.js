const DAOGenero = require("../dao/DAOGenero")
module.exports = class Genero{
    constructor(id,nome){
        this.id = id;
        this.nome = nome;
    }

    getId() {
        return this.id;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    } 
    
    async  gravar(db) {
        const resp = await new DAOGenero().gravar(this,db); 
    }

    async alterar(db) {
        const resp = await new DAOGenero().alterar(this,db); 
    }

    async excluir(db) {
        const resp = await new DAOGenero().excluir(this,db); 
    }

    async procurarId(id, db) {
        const resp=await new DAOGenero().procurarId(id, db);
        let genero = {};
        if(resp.data.length > 0) {
            genero = new Genero(
                resp.data[0].genero_id,
                resp.data[0].genero_nome
            )        
        }        
        return genero;
    }
    
    async listar(db) {
        const resp=await new DAOGenero().listar(db);
        let genero = []; 
        for(let i=0; i < resp.data.length; i++) {
            genero.push(new Genero(
                resp.data[i].genero_id,
                resp.data[i].genero_nome
            ))
        }
        return genero;
    }

    async listarPorNome(genero_nome, db) {
        const resp=await new DAOGenero().listarPorNome(genero_nome, db);
        let genero = []; 
        for(let i=0; i < resp.data.length; i++) {
            genero.push(new Genero(
                resp.data[i].genero_id,
                resp.data[i].genero_nome
            ))
        }
        return genero;
    }

    
}