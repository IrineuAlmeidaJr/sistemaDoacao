const DAODoacao = require("../dao/DAODoacao")

module.exports = class Doacao {

    constructor(id, dataDoacao, localDoacao_id, camapanha_id, usu_id, status){
        this.id = id;
        this.dataDoacao = dataDoacao;
        this.localDoacao_id = localDoacao_id;
        this.camapanha_id = camapanha_id;
        this.usu_id = usu_id;
        this.status = status;
    }

    getId(){
        return this.id;
    }

    setId(id){
        this.id = id;
    }

    getDataDoacao(){
        return this.dataDoacao;
    }

    setDataDoacao(dataDoacao){
        this.dataDoacao = dataDoacao;
    }

    getLocalDoacao_id(){
        return this.localDoacao_id;
    }

    setLocalDoacao_id(localDoacao_id){
        this.localDoacao_id = localDoacao_id;
    }

    getCamapanha_id(){
        return this.camapanha_id;
    }

    setCamapanha_id(camapanha_id){
        this.camapanha_id = camapanha_id;
    }

    getUsu_id(){
        return this.codUsuario;
    }

    setUsu_id(usu_id){
        this.usu_id = usu_id;
    }

    getStatus(){
        return this.status;
    }

    setStatus(status){
        this.status = status;
    }

    async procurarId(id, db) {
        const resp=await new DAODoacao().procurarId(id, db);
        let doacao = {};
        if(resp.data.length > 0) {
            doacao = new Doacao(
                resp.data[0].doacao_id,
                resp.data[0].doacao_dataDocao,
                resp.data[0].doacao_localDoacao_id,
                resp.data[0].camapanha_id,
                resp.data[0].usu_id,
                resp.data[0].doacao_status
            )        
        }        
        return doacao;
    }

}