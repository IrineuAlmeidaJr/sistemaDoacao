const DAOCampanhaDoacao = require('../dao/DAOCampanhaDoacao')

class CampanhaDoacao
{
    

    constructor(cod,nome, dataInicio, dataFim){
        this.cod = cod
        this.nome = nome;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

    getCod(){
        return this.cod
    }

    setCod(cod){
        this.cod = cod
    }
    getNome(){
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    getDataInicio(){
        return this.dataInicio;
    }

    setDataInicio(dataInicio){
        this.dataInicio = dataInicio;
    }

    getDataFim(){
        return this.dataFim;
    }

    setDataFim(dataFim){
        this.dataFim = dataFim;
    }   
    async gravar(db){
        const resp=await new DAOCampanhaDoacao().gravar(this,db);
        this.cod=resp.lastId; 
    }

    async alterar(db){
        await new DAOCampanhaDoacao().alterar(this,db)
    }

    async excluir(db){
        await new DAOCampanhaDoacao().deletar(this,db)
    }

    async buscarId(id,db){
        console.log(id)
        const result = await new DAOCampanhaDoacao().listarId(id,db)
        let obj = new CampanhaDoacao(result.data[0].campanha_id,result.data[0].campanha_nome,result.data[0].campanha_dataInicio,result.data[0].campanha_dataFim)
        return obj

    }

    async listar(db){
        const result = await new DAOCampanhaDoacao().listar(db)
        let lista = []
        for(let i = 0;i<result.data.length;i++){
            lista.push(new CampanhaDoacao(result.data[i].campanha_id,result.data[i].campanha_nome,result.data[i].campanha_dataInicio,result.data[i].campanha_dataFim))

        }
        return lista
    }

}

module.exports = CampanhaDoacao; 