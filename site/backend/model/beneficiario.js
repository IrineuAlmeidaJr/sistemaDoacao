class beneficiaro {

    constructor(cod,cpf,nome,dataNasc,usuarioId) {
        this.cod = cod
        this.cpf = cpf;
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.usuarioId = usuarioId;
    }

    getCod() {
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

    setCod(cod) {
        this.cod = cod;
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

    async buscarId(){
        return null;
    }
}

module.exports = beneficiaro;