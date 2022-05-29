const DAODoacao = require("../dao/DAODoacao")

module.exports = class Doacao {

    constructor(id, dataDoacao, localDoacao_id, campanha_id, usu_id, status){
        this.id = id;
        this.dataDoacao = dataDoacao;
        this.localDoacao_id = localDoacao_id;
        this.campanha_id = campanha_id;
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

    getCampanha_id(){
        return this.campanha_id;
    }

    setCampanha_id(campanha_id){
        this.campanha_id = campanha_id;
    }

    getUsu_id(){
        return this.usu_id;
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

    async  gravar(db) {
        const resp = await new DAODoacao().gravar(this, db); 
    }

    async alterar(db) {
        const resp = await new DAODoacao().alterar(this,db); 
    }

    async excluir(db) {
        const resp = await new DAODoacao().excluir(this,db); 
    }

    async procurarId(id, db) {
        const resp=await new DAODoacao().procurarId(id, db);
        let doacao = {};
        if(resp.data.length > 0) {
            doacao = new Doacao(
                resp.data[0].doacao_id,
                resp.data[0].doacao_dataDoacao,
                resp.data[0].doacao_localDoacao_id,
                resp.data[0].campanha_id,
                resp.data[0].usu_id,
                resp.data[0].doacao_status
            )        
        }        
        return doacao;
    }

    async listar(db) {
        const resp=await new DAODoacao().listar(db);
        let doacao = []; 
        for(let i=0; i < resp.data.length; i++) {
            doacao.push(new Doacao(
                resp.data[i].doacao_id,
                resp.data[i].doacao_dataDoacao,
                resp.data[i].doacao_localDoacao_id,
                resp.data[i].campanha_id,
                resp.data[i].usu_id,
                resp.data[i].doacao_status
            ));
        }
        return doacao;
    }

    async listarDetalhado(db) {
        const resp=await new DAODoacao().listarDetalhado(db);
        let doacao = []; 
        // Tive que criar um objeto que retorna o que eu quero exibir no front pela busca
        // de SQL
        for(let i=0; i < resp.data.length; i++) {
            doacao.push({
                doacao_id: resp.data[i].doacao_id,
                itens_nome: resp.data[i]. itens_nome,
                doacao_dataDoacao: resp.data[i].doacao_dataDoacao,
                quantidade: resp.data[i].itens_quantidade,
                unidadeMedida_id: resp.data[i].unidadeMedida_id,
                tipoDoacao_id: resp.data[i].tipoDoacao_id,
                genero_id: resp.data[i].genero_id,
                usu_nome: resp.data[i].usu_nome,
                campanha_id: resp.data[i].campanha_id,
                local_id: resp.data[i].doacao_localDoacao_id,
                usu_id: resp.data[i].usu_id
            });
        }
        return doacao;
    }

    async listarDetalhadoTodos(db) {
        const resp=await new DAODoacao().listarDetalhadoTodos(db);
        let doacao = []; 
        // Tive que criar um objeto que retorna o que eu quero exibir no front pela busca
        // de SQL
        for(let i=0; i < resp.data.length; i++) {
            doacao.push({
                doacao_id: resp.data[i].doacao_id,
                itens_nome: resp.data[i]. itens_nome,
                doacao_dataDoacao: resp.data[i].doacao_dataDoacao,
                quantidade: resp.data[i].itens_quantidade,
                unidadeMedida_id: resp.data[i].unidadeMedida_id,
                tipoDoacao_id: resp.data[i].tipoDoacao_id,
                genero_id: resp.data[i].genero_id,
                usu_nome: resp.data[i].usu_nome,
                status: resp.data[i].doacao_status
            });
        }
        return doacao;
    }


    async ultimo(db) {
        const resp=await new DAODoacao().ultimo(db);
        let doacao; 
        console.log(resp);
        doacao = new Doacao(
            resp.data[0].doacao_id,
            resp.data[0].doacao_dataDoacao,
            resp.data[0].doacao_localDoacao_id,
            resp.data[0].campanha_id,
            resp.data[0].usu_id,
            resp.data[0].doacao_status
        );
        
        return doacao;
    }

}