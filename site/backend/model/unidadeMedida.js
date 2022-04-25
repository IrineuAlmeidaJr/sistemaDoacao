module.export = class unidade {

    constructor(cod, nome) {
        this.cod = cod;
        this.nome = nome;
    }

    getCod() {
        return this.cod;
    }

    getNome() {
        return this.nome;
    }

    setCod(cod) {
        this.cod = cod;
    }

    setNome(nome) {
        this.nome = nome;
    }
}