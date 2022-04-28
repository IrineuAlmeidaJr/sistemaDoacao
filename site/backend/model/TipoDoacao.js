class TipoDoacao {

    constructor(nome){
        this.nome = nome;
    }

    getCod(){
        return this.cod;
    }

    setCod(cod){
        this.cod = cod;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }
}

module.exports = TipoDoacao