const campDoacao = require('../model/CampanhaDoacao.js')

module.exports = class DAOCampanhaDoacao{
    async listar(db){
        const sql ="SELECT * from campanhadoacao"
        const p = await db.consulta(sql,null);
        return p;
    }
    async listarId(id,db){
        const sql = "SELECT * from campanhadoacao where campanha_id = ?"
        const valor = [id]
        const p = await db.consulta(sql,valor);
        return p;
    }

    async gravar(camp, db){
        let sql = "INSERT INTO campanhadoacao(campanha_nome, campanha_datainicio, campanha_datafim) values(?,?,?)"
        const valor = [camp.getNome(),camp.getDataInicio(),camp.getDataFim()]
        console.log(valor)
        const p = await db.manipula(sql,valor)
        console.log(p)
        return p
    }

    async deletar(camp,db){
        let sql = "DELETE FROM campanhadoacao where campanha_id = ?"
        const valor = [camp.getCod()]
        console.log(valor)
        const p = await db.manipula(sql,valor)
        console.log(p)
        return p
    }

    async alterar(camp,db){
        let sql = "UPDATE campanhadoacao SET campanha_nome = ?, campanha_datainicio = ?, campanha_datafim = ? WHERE campanha_id = ?"
        const valor = [camp.getNome(),camp.getDataInicio(),camp.getDataFim(),camp.getCod()]
        const p = await db.manipula(sql,valor)
        console.log(p)
        return p
    }
}

