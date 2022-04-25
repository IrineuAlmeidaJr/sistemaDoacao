modules.exports =class genero{

    constructor(cod,nome){
        this.cod = cod;
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