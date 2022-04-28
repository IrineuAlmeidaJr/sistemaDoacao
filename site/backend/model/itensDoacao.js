module.exports = class itensDoacao {

    constructor (cod,nome,quantidade,codTipo,codUnidade,codTamanho,codGenero,codDoacao){
        this.cod = cod;
        this.nome = nome;
        this.quantidade = quantidade;
        this.codTipo = codTipo;
        this.codUnidade = codUnidade;
        this.codTamanho = codTamanho;
        this.codGenero = codGenero;
        this.codDoacao = codDoacao;
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

    getQuantidade(){
        return this.quantidade;
    }

    setQuantidade(quantidade){
        this.quantidade = quantidade;
    }

    getCodTipo(){
        return this.codTipo;
    }

    setCodTipo(codTipo){
        this.codTipo = codTipo;
    }

    getCodUnidade(){
        return this.codUnidade;
    }

    setCodUnidade(codUnidade){
        this.codUnidade = codUnidade;
    }

    getCodTamanho(){
        return this.codTamanho;
    }

    setCodTamanho(codTamanho){
        this.codTamanho = codTamanho;
    }

    getCodGenero(){
        return this.codGenero;
    }

    setCodGenero(codGenero){
        this.codGenero = codGenero;
    }

    getCodDoacao(){
        return this.codDoacao;
    }

    setCodDoacao(codDoacao){
        this.codDoacao = codDoacao;
    }
    

}