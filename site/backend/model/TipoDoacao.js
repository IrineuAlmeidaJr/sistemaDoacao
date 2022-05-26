const DAOTipoDoacao = require("../dao/DAOTipoDoacao")
module.exports = class TipoDoacao {

    constructor(id,nome){
        this.id = id;
        this.nome = nome;
    }

    getId(){
        return this.id;
    }

    setId(id){
        this.id = id;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    async  gravar(db) {
        const resp = await new DAOTipoDoacao().gravar(this, db); 
    }

    async alterar(db) {
        const resp = await new DAOTipoDoacao().alterar(this,db); 
    }

    async excluir(db) {
        const resp = await new DAOTipoDoacao().excluir(this,db); 
    }

    async procurarId(id, db) {
        const resp=await new DAOTipoDoacao().procurarId(id, db);
        let tipodoacao = {};
        if(resp.data.length > 0) {
            tipodoacao = new TipoDoacao(
                resp.data[0].tipo_id,
                resp.data[0].tipo_nome
            )        
        }        
        return tipodoacao;
    }

    async listar(db) {
        const resp=await new DAOTipoDoacao().listar(db);
        let tipodoacao = []; 
        for(let i=0; i < resp.data.length; i++) {
            tipodoacao.push(new TipoDoacao(
                resp.data[i].tipo_id,
                resp.data[i].tipo_nome
            ));
        }
        return tipodoacao;
    }

    async listarPorNome(tipo_nome, db) {
        const resp=await new DAOTipoDoacao().listarPorNome(tipo_nome, db);
        let tipo = []; 
        for(let i=0; i < resp.data.length; i++) {
            tipo.push(new TipoDoacao(
                resp.data[i].tipo_id,
                resp.data[i].tipo_nome
            ))
        }
        return tipo;
    }
}