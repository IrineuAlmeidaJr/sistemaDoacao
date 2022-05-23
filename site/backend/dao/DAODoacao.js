module.exports = class DAOItensDoacao {

    async procurarId(id,db){
        const sql = "SELECT * FROM doacao WHERE doacao_id=?";        
        const valor = [id];
        const resp = await db.consulta(sql,valor);
        return resp;
    }

    async listar(db) {
        const sql = "SELECT * FROM doacao";
        const itens = await db.consulta(sql);
        return itens;
    }        

}