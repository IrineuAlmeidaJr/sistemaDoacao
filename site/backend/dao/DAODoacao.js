module.exports = class DAOItensDoacao {

    async gravar(doa, db) {
        //console.log(doa);
        const sql = "INSERT INTO doacao (doacao_dataDoacao, doacao_localDoacao_id, campanha_id, usu_id, doacao_status) VALUES (?,?,?,?,?)";
        const valor = [doa.getDataDoacao(), doa.getLocalDoacao_id(), doa.getCampanha_id(), doa.getUsu_id(), doa.getStatus()]; 
        
        const result = await db.manipula(sql,valor);

        return result;        
    } 

    async alterar(doa, db) {
        const sql = "UPDATE doacao SET doacao_dataDoacao=?, doacao_localDoacao_id=?, campanha_id=?, usu_id=?, doacao_status=? WHERE doacao_id=?";
        const valor = [doa.getDataDoacao(), doa.getLocalDoacao_id(), doa.getCampanha_id(), doa.getUsu_id(), doa.getStatus(), doa.getId()];      
        const result = await db.manipula(sql, valor);  
        console.log(result);                 
    }

    async excluir(doa, db){
        const sql = "DELETE FROM doacao WHERE doacao_id=?"
        const valor = [doa.getId()];
        const result = await db.manipula(sql,valor);
        return result;
    }

    async procurarId(id,db){
        const sql = "SELECT * FROM doacao WHERE doacao_id=?";        
        const valor = [id];
        const resp = await db.consulta(sql,valor);
        return resp;
    }

    async listar(db) {
        const sql = "SELECT * FROM doacao";
        const itens = await db.consulta(sql);
        console.log(itens);
        return itens;
    } 
    
    async listarDetalhado(db) {
        const sql = "select doacao.doacao_id, itens_nome, doacao_dataDoacao, itens_quantidade, "+
        "unidadeMedida_id, tipoDoacao_id, genero_id,usu_nome, doacao.campanha_id," + 
        "doacao_localDoacao_id, doacao.usu_id " + 
        "FROM campanhadoacao " +
        "JOIN doacao " +
        "ON campanhadoacao.campanha_id = doacao.campanha_id " + 
        "AND doacao.campanha_id and doacao_status = 'A'" +
        "JOIN itensdoacao "+
        "ON doacao.doacao_id = itensdoacao.doacao_id " +
        "JOIN usuario " + 
        "ON doacao.usu_id = usuario.usu_id " +
        "order by doacao_dataDoacao DESC";
        const itens = await db.consulta(sql);
        console.log(itens);
        return itens;
    } 
    
    async ultimo(db) {
        const sql = "SELECT * FROM doacao order by doacao_id desc";
        const itens = await db.consulta(sql);
        console.log(itens);
        return itens;
    }        

}