class teste{
    #id
    #nome
    constructor(nome){
        this.#nome = nome
    }
    setId(id){
        this.#id = id
    }
    setNome(nome){
        this.#nome = nome
    }
    getId(){
        return this.#id
    }
    getNome(){
        return this.#nome
    }
    toJson(){
        let json = {"id":this.#id,"nome":this.#nome}
    }
}
module.exports = teste