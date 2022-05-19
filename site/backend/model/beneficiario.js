const DAOBeneficiario = require('../dao/DAOBeneficiario');
module.exports = class beneficiaro{

    constructor(id,cpf,nome,dataNasc,usuarioId) {
        this.id = id
        this.cpf = cpf;
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.usuarioId = usuarioId;
    }

    getid() {
        return this.id;
    }

    getCpf() {
        return this.cpf;
    }

    getNome() {
        return this.nome;
    }

    getDataNasc() {
        return this.dataNasc;
    }

    getUsuarioId() {
        return this.usuarioId;
    }

    setid(id) {
        this.id = id;
    }

    setCpf(cpf) {
        this.cpf = cpf;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setDataNasc(dataNasc) {
        this.dataNasc = dataNasc;
    }

    setUsuarioId(usuarioId) {
        this.usuarioId = usuarioId;
    }

    
    async  gravar(db) {
        const resp = await new DAOBeneficiario().gravar(this, db); 
    }

    async alterar(db) {
        const resp = await new DAOBeneficiario().alterar(this,db); 
    }

    async excluir(db) {
        const resp = await new DAOBeneficiario().excluir(this,db); 
    }

    async procurarId(id, db) {
        const resp=await new DAOBeneficiario().procurarId(id, db);
        let beneficiario = {};
        if(resp.data.length > 0) {
            beneficiario = new beneficiaro(
                resp.data[0].bene_id,
                resp.data[0].bene_cpf,
                resp.data[0].bene_nome,
                resp.data[0].bene_datanascimento,
                resp.data[0].usuario_id_usu
            )        
        }        
        return beneficiario;
    }

    async listar(db) {
        const resp=await new DAOBeneficiario().listar(db);
        let beneficiario = []; 
        for(let i=0; i < resp.data.length; i++) {
            beneficiario.push(new beneficiaro(
                resp.data[i].bene_id,
                resp.data[i].bene_cpf,
                resp.data[i].bene_nome,
                resp.data[i].bene_datanascimento,
                resp.data[i].usuario_id_usu
            ));
        }
        return beneficiario;
    }

}
