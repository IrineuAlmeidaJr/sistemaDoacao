const unidade = require('../model/UnidadeMedida');

module.exports = class DAOUnidadeMedida {

    async listar(db){
        const sql ="SELECT * from unidadeMedida"
        const p = await db.consulta(sql,null);
        return p;
    }
    async listarId(id,db){
        const sql = "SELECT * from unidadeMedida where uni_id = ?"
        const valor = [id]
        const p = await db.consulta(sql,valor);
        return p;
    }

    async gravar(uni, db){
        let sql = "INSERT INTO unidadeMedida(uni_nome) values(?)"
        const valor = [uni.getNome()]
        const p = await db.manipula(sql,valor)
        return p
    }

    async deletar(uni,db){
        let sql = "DELETE FROM unidadeMedida where uni_id = ?"
        const valor = [uni.getCod()]
        const p = await db.manipula(sql,valor)
        console.log(p)
        return p
    }

}