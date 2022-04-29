class beneficiaro {

    constructor(cpf,nome,dataNasc,usuarioId) {
        this.cpf = cpf;
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.usuarioId = usuarioId;
    }

    getId() {
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

    setId(id) {
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
}

module.exports = beneficiaro;