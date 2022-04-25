module.export = class Local{

    constructor(cod,nomeRua,numero,bairro,cidade,estado,campanhaId,usuarioId) {
        this.cod = cod;
        this.nomeRua = nomeRua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.campanhaId = campanhaId;
        this.usuarioId = usuarioId;
    }

    getCod() {
        return this.cod;
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

    setCod(cod) {
        this.cod = cod;
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
}