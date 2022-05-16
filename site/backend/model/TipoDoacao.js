const DAOTipoDoacao = require("../dao/DAOTipoDoacao")
module.exports = class TipoDoacao {

    constructor(id,nome){
        this.id = id;
        this.nome = nome;
    }

    getId(){
        return this.cod;
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
}