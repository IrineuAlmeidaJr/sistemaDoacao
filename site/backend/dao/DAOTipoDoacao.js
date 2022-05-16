const tipo = require('../model/TipoDoacao');

module.exports = class DAOTipoDoacao {

    async gravar(tipo, db) {

        const sql = "INSERT INTO tipodoacao (tipo_nome) VALUES (?)";
        const valor = [tipo.getNome()]; 
        
        const result = await db.manipula(sql,valor);

        return result;        
    } 

    async alterar(tipo, db) {
        // Fazer validações aqui --> de CPF tambem
        const sql = "UPDATE tipodoacao SET tipo_nome=? WHERE tipo_id=?";
        const valor = [tipo.getNome(), tipo.getId()];      
        const result = await db.manipula(sql, valor);  
        console.log(result);                 
    }

    async excluir(tipo, db){
        const sql = "DELETE FROM tipodoacao WHERE tipo_id=?"
        const valor = [tipo.getId()];
        const result = await db.manipula(sql,valor);
        return result;
    }

    async procurarId(id, db){
        const sql = "SELECT * FROM tipodoacao WHERE tipo_id=?";        
        const valor = [id];
        const result = await db.consulta(sql,valor);
        return result;
    }

    async listar(db) {

        const sql = "SELECT * FROM tipodoacao";
        const result = await db.consulta(sql);
        return result;
    }

    

}