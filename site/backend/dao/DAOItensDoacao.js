module.exports = class DAOItensDoacao {

    async gravar(item, db) {
        console.log(item);
        const sql = "INSERT INTO itensdoacao (itens_nome," +
                    "itens_quantidade," +
                    "tipoDoacao_id," +
                    "unidadeMedida_id," +
                    "tamanho_id," +
                    "genero_id," +
                    "doacao_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const valor = [item.getNome(),
                    item.getQuantidade(),
                    item.getTipoDoacao_id(),
                    item.getUnidadeMedida_id(),
                    item.getTamanho_id(),
                    item.getGenero_id(),
                    item.getDoacao_id()
                    ]; 
        
        const result = await db.manipula(sql,valor);

        return result;        
    }

    async alterar(item, db) {
        const sql = "UPDATE itensdoacao SET itens_nome=? ,itens_quantidade=?, tipoDoacao_id=?,"+
                    "unidadeMedida_id=?,tamanho_id=?, genero_id=?, doacao_id=?"+
                    "WHERE itens_id=?";
        const valor = [ item.getNome(),
                        item.getQuantidade(),
                        item.TipoDoacao_id(),
                        item.getUnidadeMedida_id(),
                        item.getTamanho_id(),
                        item.getGenero_id(),
                        item.getDoacao_id(),
                        item.getId()];      
        const result = await db.manipula(sql, valor);  
        console.log(result);                 
    }

    async excluir(item, db){
        const sql = "DELETE FROM itensdoacao WHERE itens_id=?"
        const valor = [item.getId()];
        const result = await db.manipula(sql,valor);
        return result;
    }

    async listar(db) {
        const sql = "SELECT * FROM itensdoacao";
        const itens = await db.consulta(sql);
        return itens;
    }        

}