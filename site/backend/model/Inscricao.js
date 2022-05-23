
const Beneficiario = require('../model/beneficiario')
const DAOInscricao = require('../dao/DAOinscricao')
class Inscricao {
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
            obj = new Inscricao(result.data[0].beneficiario_id, result.data[0].campanhaDoacao_id,result.data[0].ins_data)
        }
        return obj

    }
    async listar(db){
        const result = await new DAOInscricao().listar(db)
        let lista = []
        for(let i = 0;i<result.data.length;i++){
            lista.push(new Inscricao(result.data[i].beneficiario_id, result.data[i].campanhaDoacao_id,result.data[i].ins_data))

        }
        return lista
    }

    async buscaCancela(id,db){
        const result = await new DAOInscricao().buscaCancela(id,db)
        let lista = []
        let beneficiario
        for(let i = 0;i<result.data.length;i++){
            beneficiario = new Beneficiario(
                result.data[i].bene_id,
                result.data[i].bene_cpf,
                result.data[i].bene_nome,
                result.data[i].bene_datanascimento,
                result.data[i].usuario_id_usu
            )
            lista.push(new Inscricao(beneficiario, result.data[i].campanhaDoacao_id,result.data[i].ins_data))   

        }
        return lista
    }

    
}
module.exports = Inscricao