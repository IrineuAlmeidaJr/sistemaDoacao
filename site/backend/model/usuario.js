const DAOUsuario = require("../dao/DAOUsuario")

module.exports = class Usuario {
    constructor(id, cpf,senha,nome,dataNascimento,endereco,telefone,email,tipo){
        this.id = id
        this.cpf = cpf
        this.senha = senha
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.endereco = endereco
        this.telefone = telefone
        this.email = email
        this.tipo = tipo
    }

    setId(id){
        this.id = id
    }

    setCPF(cpf){
        this.cpf = cpf
    }

    setSenha(senha){
        this.senha = senha
    }

    setNome(nome){
        this.nome = nome
    }

    setData(dataNascimento){
        this.dataNascimento = dataNascimento
    }

    setEndereco(endereco){
        this.endereco = endereco
    }

    setTelefone(telefone){
        this.telefone = telefone
    }

    setEmail(email){
        this.email = email
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    getId(){
        return this.id
    }

    getCPF(){
        return this.cpf
    }

    getSenha(){
        return this.senha
    }

    getNome(){
        return this.nome
    }

    getData(){
        return this.dataNascimento
    }

    getEndereco(){
        return this.endereco
    }

    getTelefone(){
        return this.telefone
    }

    getEmail(){
        return this.email
    }

    getTipo(){
        return this.tipo
    }

    async  gravar(db) {
        const resp = await new DAOUsuario().gravar(this,db); 
    }

    async alterar(db) {
        const resp = await new DAOUsuario().alterar(this,db); 
    }

    async excluir(db) {
        const resp = await new DAOUsuario().excluir(this,db); 
    }

    async procurarId(id, db) {
        const resp=await new DAOUsuario().procurarId(id, db);
        let usuario = {};
        if(resp.data.length >= 0) {
            usuario = new Usuario(
                resp.data[0].usu_id,
                resp.data[0].usu_cpf,
                resp.data[0].usu_senha,
                resp.data[0].usu_nome,
                resp.data[0].usu_dataNasc,
                resp.data[0].usu_endereco,
                resp.data[0].usu_telefone,
                resp.data[0].usu_email,
                resp.data[0].usu_tipoUsuario
            )        
        }        
        return usuario;
    }

    async listar(db) {
        const resp=await new DAOUsuario().listar(db);
        let usuario = []; 
        for(let i=0; i < resp.data.length; i++) {
            usuario.push(new Usuario(
                resp.data[i].usu_id,
                resp.data[i].usu_cpf,
                resp.data[i].usu_senha,
                resp.data[i].usu_nome,
                resp.data[i].usu_dataNasc,
                resp.data[i].usu_endereco,
                resp.data[i].usu_telefone,
                resp.data[i].usu_email,
                resp.data[i].usu_tipoUsuario
            ))
        }
        return usuario;
    }

    async listarPorNome(usu_nome, db) {
        const resp=await new DAOUsuario().listarPorNome(usu_nome, db);
        let usuario = []; 
        for(let i=0; i < resp.data.length; i++) {
            usuario.push(new Usuario(
                resp.data[i].usu_id,
                resp.data[i].usu_cpf,
                resp.data[i].usu_senha,
                resp.data[i].usu_nome,
                resp.data[i].usu_dataNasc,
                resp.data[i].usu_endereco,
                resp.data[i].usu_telefone,
                resp.data[i].usu_email,
                resp.data[i].usu_tipoUsuario
            ))
        }
        return usuario;
    }
    
}