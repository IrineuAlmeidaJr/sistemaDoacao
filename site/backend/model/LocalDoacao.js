const DAOLocalDoacao = require('../dao/DAOLocalDoacao');
module.exports = class LocalDoacao {

    constructor(id,nomeRua,numero,bairro,cidade,estado,usuarioId) {
        this.id = id;
        this.nomeRua = nomeRua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.usuarioId = usuarioId;
    }

    getId() {
        return this.id;
    }

    getNomeRua() {
        return this.nomeRua;
    }

    getNumero() {
        return this.numero;
    }

    getBairro() {
        return this.bairro;
    }

    getCidade() {
        return this.cidade;
    }

    getEstado() {
        return this.estado;
    }

    getCampanhaId() {
        return this.campanhaId;
    }

    getUsuarioId() {
        return this.usuarioId;
    }

    setId(id) {
        this.id = id;
    }

    setNomeRua(nomeRua) {
        this.nomeRua = nomeRua;
    }

    setNumero(numero) {
        this.numero = numero;
    }

    setBairro(bairro) {
        this.bairro = bairro;
    }

    setCidade(cidade) {
        this.cidade = cidade;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    setCampanhaId(campanhaId) {
        this.campanhaId = campanhaId;
    }

    setUsuarioId(usuarioId) {
        this.usuarioId = usuarioId;
    }

    async gravar(db) {
        const resp = await new DAOLocalDoacao().gravar(this, db);
        this.cod = resp.lastId;
    }

    async alterar(db) {
        const resp = await new DAOLocalDoacao().alterar(this, db);
    }

    async excluir(db) {
        const resp = await new DAOLocalDoacao().excluir(this, db);
    }

    async listar(db) {
        const resp = await new DAOLocalDoacao().listar(db);
        let localdoacao = [];
        for (let i = 0; i < resp.length; i++) {
            localdoacao.push(new LocalDoacao(
                resp[i].localdoacao_id,
                resp[i].localdoacao_nomeRua,
                resp[i].localdoacao_numero,
                resp[i].localdoacao_bairro,
                resp[i].localdoacao_cidade,
                resp[i].localdoacao_estado,
                resp[i].usuario_id
            ));
        }
        return localdoacao;
    }
        
    async procurarId(id, db) { 
        const resp = await new DAOLocalDoacao().procurarId(id, db);
        let localdoacao = {};
        if (resp.data.length > 0) {
            localdoacao = new LocalDoacao(
                resp.data[0].localdoacao_id,
                resp.data[0].localdoacao_nomeRua,
                resp.data[0].localdoacao_numero,
                resp.data[0].localdoacao_bairro,
                resp.data[0].localdoacao_cidade,
                resp.data[0].localdoacao_estado,
                resp.data[0].usuario_id
            );
        }
        return localdoacao;
    }

}
