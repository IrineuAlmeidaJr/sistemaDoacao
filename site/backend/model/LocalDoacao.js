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
        //console.log(resp);
        let localdoacao = [];
        for (let i = 0; i < resp.data.length; i++) {
            localdoacao.push(new LocalDoacao(
                resp.data[i].local_id,
                resp.data[i].local_nomeRua,
                resp.data[i].local_numero,
                resp.data[i].local_bairro,
                resp.data[i].local_cidade,
                resp.data[i].local_estado,
                resp.data[i].usuario_id_usu
            ));
        }
        //console.log("achou o:"+localdoacao);
        return localdoacao;
    }
        
    async procurarId(id, db) { 
        const resp = await new DAOLocalDoacao().procurarId(id, db);
        let localdoacao = {};
        if (resp.data.length > 0) {
            localdoacao = new LocalDoacao(
                resp.data[0].local_id,
                resp.data[0].local_nomeRua,
                resp.data[0].local_numero,
                resp.data[0].local_bairro,
                resp.data[0].local_cidade,
                resp.data[0].local_estado,
                resp.data[0].usuario_id_usu
            );
        }
        return localdoacao;
    }
}
