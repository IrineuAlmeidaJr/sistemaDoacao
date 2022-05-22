
const DAOInscricao = require('../dao/DAOinscricao')
class inscricao {
   constructor(beneficiario,campanha, dataInscricao) {
        this.beneficiario = beneficiario
        this.campanha = campanha
        this.dataInscricao = dataInscricao
    }
    
    getBeneficiario() {
        return this.beneficiario;
    }

    getCampanha() {
        return this.campanha;
    }

    setBeneficiario(beneficiario) {
        this.beneficiario = beneficiario;
    }

    setCampanha(campanha) {
        this.campanha = campanha;
    }

    getDataInscricao(){
        return this.dataInscricao
    }

    setDataInscricao(dataInscricao){
        this.dataInscricao = dataInscricao
    }

    async gravar(db){
        await new DAOInscricao().gravar(this,db);
    }

    async excluir(db){
        await new DAOInscricao().deletar(this,db)
    }

    async buscarId(db){
        const result = await new DAOInscricao().listarId(this,db)
        let obj
        if(result.data.length === 0){
            obj = null;
        }
        else{
            obj = new inscricao(result.data[0].beneficiario_id, result.data[0].campanhaDoacao_id,result.data[0].ins_data)
        }
        return obj

    }
    async listar(db){
        const result = await new DAOInscricao().listar(db)
        let lista = []
        for(let i = 0;i<result.data.length;i++){
            lista.push(new inscricao(result.data[0].beneficiario_id, result.data[0].campanhaDoacao_id,result.data[0].ins_data))

        }
        return lista
    }

    
}
module.exports = inscricao