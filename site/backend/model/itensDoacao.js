const DAOItensDoacao = require("../dao/DAOItensDoacao")
module.exports = class itensDoacao {
    constructor (id,nome,quantidade,tipoDoacao_id,unidadeMedida_id,tamanho_id,genero_id,doacao_id){
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.tipoDoacao_id = tipoDoacao_id;
        this.unidadeMedida_id = unidadeMedida_id;
        this.tamanho_id = tamanho_id;
        this.genero_id = genero_id;
        this.doacao_id = doacao_id;
    }

    getId(){
        return this.id;
    }

    setId(id){
        this.id = id;
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

    getTipoDoacao_id(){
        return this.tipoDoacao_id;
    }

    setTipoDoacao_id(tipoDoacao_id){
        this.tipoDoacao_id = tipoDoacao_id;
    }

    getUnidadeMedida_id(){
        return this.unidadeMedida_id;
    }

    setCodUnidade(unidadeMedida_id){
        this.unidadeMedida_id = unidadeMedida_id;
    }

    getTamanho_id(){
        return this.tamanho_id;
    }

    setTamanho_id(tamanho_id){
        this.tamanho_id = tamanho_id;
    }

    getGenero_id(){
        return this.genero_id;
    }

    setGenero_id(genero_id){
        this.genero_id = genero_id;
    }

    getDoacao_id(){
        return this.doacao_id;
    }

    setDoacao_id(doacao_id){
        this.doacao_id = doacao_id;
    }
    

}