const DAOItensDoacao = require("../dao/DAOItensDoacao");
const TipoDoacao = require('../model/TipoDoacao');
const UnidadeMedida = require('../model/UnidadeMedida');
const Tamanho = require('../model/tamanho');
const Genero = require('../model/Genero');
const Doacao = require('../model/Doacao');
const Usuario = require('../model/Usuario');

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

    async  gravar(db) {
        const resp = await new DAOItensDoacao().gravar(this, db); 
    }

    async alterar(db) {
        const resp = await new DAOItensDoacao().alterar(this,db); 
    }

    async excluir(db) {
        const resp = await new DAOItensDoacao().excluir(this,db); 
    }

    async listar(db) {
        const resp=await new DAOItensDoacao().listar(db);
        let itens = []; 
        for(let i=0; i < resp.data.length; i++) {
            itens.push(new itensDoacao(
                resp.data[i].itens_id,
                resp.data[i].itens_nome,
                resp.data[i].itens_quantidade,
                resp.data[i].tipoDoacao_id,
                resp.data[i].unidadeMedida_id,
                resp.data[i].tamanho_id,
                resp.data[i].genero_id,
                resp.data[i].doacao_id
            ))
        }
        return itens;
    }

    async listarPorDoacao(doacao_id, db) {
        const resp=await new DAOItensDoacao().listarPorDoacao(doacao_id, db);
        let itens = []; 
        if(resp.data.length > 0) {
            itens.push(new itensDoacao(
                resp.data[0].itens_id,
                resp.data[0].itens_nome,
                resp.data[0].itens_quantidade,
                resp.data[0].tipoDoacao_id,
                resp.data[0].unidadeMedida_id,
                resp.data[0].tamanho_id,
                resp.data[0].genero_id,
                resp.data[0].doacao_id
            ))
        }
        return itens;
    }

    async listarDetalhado(db) {
        // ***OBS : essa é uma busca detalhada que retorna já formatado por nome o tipo de doação,
        // uniidade de medida, tamanho, genero e nome do Doador. 
        const resp=await new DAOItensDoacao().listar(db);
        let itens = []; 
        for(let i=0; i < resp.data.length; i++) {
            itens.push(new itensDoacao(
                resp.data[i].itens_id,
                resp.data[i].itens_nome,
                resp.data[i].itens_quantidade,
                resp.data[i].tipoDoacao_id,
                resp.data[i].unidadeMedida_id,
                resp.data[i].tamanho_id,
                resp.data[i].genero_id,
                resp.data[i].doacao_id
            ))
        }
        for(let i=0; i < itens.length; i++) {
            // Busca Tipo Doacao
            const nomeTipoDoacao = await new TipoDoacao().procurarId(itens[i].tipoDoacao_id, db);
            const nomeUnidadeMedia = await new UnidadeMedida().buscarId(itens[i].unidadeMedida_id, db);
            const nomeTamanho = await new Tamanho().buscarId(itens[i].tamanho_id, db);
            const nomeGenero = await new Genero().procurarId(itens[i].genero_id, db);
            const doacao = await new Doacao().procurarId(itens[i].doacao_id, db);
            const nomeDoador = await new Usuario().procurarId(doacao.usu_id, db);
            itens[i].tipoDoacao_id = nomeTipoDoacao.nome;       
            itens[i].unidadeMedida_id = nomeUnidadeMedia.nome;
            itens[i].tamanho_id = nomeTamanho.nome;
            itens[i].genero_id = nomeGenero.nome;
            itens[i].doacao_id = nomeDoador.nome; 
        }
        
        
        return itens;
    }
    

}