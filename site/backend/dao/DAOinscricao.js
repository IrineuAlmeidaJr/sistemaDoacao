
module.exports = class DAOInscricao{
    async listar(db){
        const sql ="SELECT * from inscricao"
        const p = await db.consulta(sql,null);
        return p;
    }
    async listarId(ins,db){
        const sql = "SELECT * from inscricao where beneficiario_id = ? and campanhaDoacao_id = ?"
        const valor = [ins.getBeneficiario().getid(),ins.getCampanha().getCod()]
        const p = await db.consulta(sql,valor);
        console.log(p)
        return p;
    }
    async gravar(ins, db){
        let sql = "INSERT INTO inscricao(beneficiario_id, campanhaDoacao_id, ins_data) values(?,?,?)"
        const valor = [ins.getBeneficiario().getid(),ins.getCampanha().getCod(),ins.getDataInscricao()]
        const p = await db.manipula(sql,valor)
        console.log(p)
        return p
    }
    async deletar(ins,db){
        let sql = "DELETE FROM inscricao where beneficiario_id = ? and campanhaDoacao_id = ?"
        const valor = [ins.getBeneficiario().getid(),ins.getCampanha().getCod()]
        const p = await db.manipula(sql,valor)
        console.log(p)
        return p
    }
    async buscaCancela(id,db){
        let sql = "select * from inscricao as i inner join beneficiario as b on i.beneficiario_id = b.bene_id and b.usuario_id_usu = ?"
        const valor = [id]
        const p = await db.consulta(sql,valor);
        return p;
    }
    //alterar não é necessário, pois não será possível modificar uma inscrição realizada
}

