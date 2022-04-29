class CampanhaDoacao
{
    

    constructor(nome, dataInicio, dataFim){
        this.nome = nome;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
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

}

module.exports = CampanhaDoacao;