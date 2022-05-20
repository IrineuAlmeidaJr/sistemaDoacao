const local = require ('../model/LocalDoacao');

module.exports = class DAOLocalDoacao{

    async gravar(local, db) {
        const sql = "INSERT INTO localDoacao(local_nomerua,local_numero,local_bairro,local_cidade,local_estado,usuario_id_usu) VALUES (?,?,?,?,?,?)";
        const valor = [local.getNomeRua(),local.getNumero(),local.getBairro(),local.getCidade(),local.getEstado(),local.getUsuarioId()];
        const result = await db.manipula(sql,valor);
        return result;
    }

    async alterar(local, db) {
        // Fazer validações aqui --> de CPF tambem
        const sql = "UPDATE localDoacao SET local_nomerua=?, local_numero=?, local_bairro=?, local_cidade=?, local_estado=?, usuario_id_usu=? WHERE local_id=?";
        const valor = [local.getNomeRua(),local.getNumero(),local.getBairro(),local.getCidade(),local.getEstado(),local.getUsuarioId(),local.getId()];      
        const result = await db.manipula(sql, valor);  
        console.log(result);                 
    }

    async excluir(local, db){
        const sql = "DELETE FROM localDoacao WHERE local_id=?"
        const valor = [local.getId()];
        const result = await db.manipula(sql,valor);
        return result;
    }

    async procurarId(id, db){
        const sql = "SELECT * FROM localDoacao WHERE local_id=?";        
        const valor = [id];
        const result = await db.consulta(sql,valor);
        return result;
    }

    async listar(db) {
        const sql = "SELECT * FROM localDoacao";
        const result = await db.consulta(sql);
        return result;
    }
    

}

//INSERT INTO localdoacao (local_nomerua,local_numero,local_bairro,local_cidade,local_estado,usuario_id_usu) values('#1','#2','#3','#4','#5',#6)"