const DAOTamanho = require('../dao/DAOTamanho')
class Tamanho {

    constructor(cod,nome) {
        this.cod = cod
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

    async gravar(db){
        const resp=await new DAOTamanho().gravar(this,db);
        this.cod=resp.lastId; 
    }

    async alterar(db){
        await new DAOTamanho().alterar(this,db)
    }

    async excluir(db){
        await new DAOTamanho().deletar(this,db)
    }

    async buscarId(id,db){
        const result = await new DAOTamanho().listarId(id,db)
        let obj = new Tamanho(result.data[0].tamanho_id,result.data[0].tamanho_tam)
        return obj

    }

    async listar(db){
        const result = await new DAOTamanho().listar(db)
        let lista = []
        for(let i = 0;i<result.data.length;i++){
            lista.push(new Tamanho(result.data[i].tamanho_id,result.data[i].tamanho_tam))

        }
        return lista
    }

    async listarPorNome(tam_nome, db) {
        const resp=await new DAOTamanho().listarPorNome(tam_nome, db);
        let tamanho = []; 
        for(let i=0; i < resp.data.length; i++) {
            tamanho.push(new Tamanho(
                resp.data[i].tamanho_id,
                resp.data[i].tamanho_tam
            ))
        }
        return tamanho;
    }
}

module.exports = Tamanho;