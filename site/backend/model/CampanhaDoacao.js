module.exports = class CampanhaDoacao
{

    constructor(cod, nome, dataInicio, dataFim){
        this.campanha_cod = cod;
        this.campanha_nome = nome;
        this.campanha_dataInicio = dataInicio;
        this.campanha_dataFim = dataFim;
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

    async save(connection){
        await DAOCampanhaDoacao.create(connection, this);
    }

    async update(connection){
        await DAOCampanhaDoacao.update(connection, this);
    }

    async delete(connection){
        await DAOCampanhaDoacao.delete(connection, this);
    }


}