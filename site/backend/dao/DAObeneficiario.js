const beneficiario = require('../model/beneficiario');

module.exports = class DAOBeneficiario {

     async gravar(beneficiario, db) {
      
        const sql = "INSERT INTO beneficiario(bene_cpf, bene_nome, bene_datanascimento, usuario_id_usu) VALUES (?,?,?,?)";
        const valor = [beneficiario.getCpf(), beneficiario.getNome(), beneficiario.getDataNasc(), beneficiario.getUsuarioId()];

        const result = await db.manipula(sql,valor);
        return result;
     }

    async alterar(beneficiario, db) {
        // Fazer validações aqui --> de CPF tambem
        const sql = "UPDATE beneficiario SET bene_cpf=?, bene_nome=?, bene_datanascimento=?, usuario_id_usu=? WHERE bene_id=?";
        const valor = [beneficiario.getCpf(), beneficiario.getNome(), beneficiario.getDataNasc(), beneficiario.getUsuarioId(), beneficiario.getId()];      
        const result = await db.manipula(sql, valor);  
        console.log(result);                 
    }

    async excluir(beneficiario, db){
        const sql = "DELETE FROM beneficiario WHERE bene_id=?"
        const valor = [beneficiario.getId()];
        const result = await db.manipula(sql,valor);
        return result;
    }

    async procurarId(id, db){
        const sql = "SELECT * FROM beneficiario WHERE bene_id=?";        
        const valor = [id];
        const result = await db.consulta(sql,valor);
        return result;
    }

    async listar(db) {   
            const sql = "SELECT * FROM beneficiario";
            const result = await db.consulta(sql);
            return result;
        }
}
