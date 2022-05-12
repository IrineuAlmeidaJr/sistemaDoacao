
module.exports = class Usuario {
    constructor(cpf,senha,nome,dataNascimento,endereco,telefone,email,tipo){
        this.cpf = cpf
        this.senha = senha
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.endereco = endereco
        this.telefone = telefone
        this.email = email
        this.tipo = tipo
    }

    /*
        *** DÚVIDA: precisa colocar todos esse gets e sets ???
    */

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
        return this.#nome
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
}