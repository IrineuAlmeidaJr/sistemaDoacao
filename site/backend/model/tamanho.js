const DAOTamanho = require('../dao/DAOTamanho')
class tamanho {

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
        let obj = new tamanho(result.data[0].tamanho_id,result.data[0].tamanho_tam)
        return obj

    }

    async listar(db){
        const result = await new DAOTamanho().listar(db)
        let lista = []
        for(let i = 0;i<result.data.length;i++){
            lista.push(new tamanho(result.data[i].tamanho_id,result.data[i].tamanho_tam))

        }
        return lista
    }
}

module.exports = tamanho;