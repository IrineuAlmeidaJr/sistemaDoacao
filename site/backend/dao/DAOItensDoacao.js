module.exports = class DAOItensDoacao {

    async listar(db) {
        const sql = "SELECT * FROM itensdoacao";
        const itens = await db.consulta(sql);
        return itens;
    }        

}