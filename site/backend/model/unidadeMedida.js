const DAOUnidadeMedida = require('../dao/DAOUnidadeMedida')

module.exports = class Unidade {

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
    async gravar(db){
        const resp=await new DAOUnidadeMedida().gravar(this,db);
        this.cod=resp.lastId; 
    }

    async alterar(db){
        await new DAOUnidadeMedida().alterar(this,db)
    }

    async excluir(db){
        await new DAOUnidadeMedida().deletar(this,db)
    }

    async buscarId(id,db){
        const result = await new DAOUnidadeMedida().listarId(id,db)
        let obj = new Unidade(result.data[0].uni_id,result.data[0].uni_nome)
        return obj

    }

    async listar(db){
        const result = await new DAOUnidadeMedida().listar(db)
        let lista = []
        for(let i = 0;i<result.data.length;i++){
            lista.push(new Unidade(result.data[i].uni_id,result.data[i].uni_nome))

        }
        return lista
    }
}