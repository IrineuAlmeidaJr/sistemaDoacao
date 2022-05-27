const lc = require ('../model/LocalDoacao');

module.exports = class DAOLocalDoacao{

    async gravar(lc, db) {
        const sql = "INSERT INTO localdoacao(local_nomeRua,local_numero,local_bairro,local_cidade,local_estado,usuario_id_usu) VALUES (?,?,?,?,?,?)";
        const valor = [lc.getNomeRua(),lc.getNumero(),lc.getBairro(),lc.getCidade(),lc.getEstado(),lc.getUsuarioId()];
        const result = await db.manipula(sql,valor);
        return result;
    }

    async alterar(lc, db) {
        // Fazer validações aqui --> de CPF tambem
        const sql = "UPDATE localdoacao SET local_nomeRua=?, local_numero=?, local_bairro=?, local_cidade=?, local_estado=?, usuario_id_usu=? WHERE local_id=?";
        const valor = [lc.getNomeRua(),lc.getNumero(),lc.getBairro(),lc.getCidade(),lc.getEstado(),lc.getUsuarioId(),lc.getId()];      
        const result = await db.manipula(sql, valor);  
        //console.log(result);                 
    }

    async excluir(lc, db){
        const sql = "DELETE FROM localdoacao WHERE local_id=?"
        const valor = [lc.getId()];
        //console.log("dao exlcuir: "+valor)
        const result = await db.manipula(sql,valor);
        return result;
    }

    async procurarId(id, db){
        const sql = "SELECT * FROM localdoacao WHERE local_id=?";        
        const valor = [id];
        const result = await db.consulta(sql,valor);
        return result;
    }

    async listar(db) {
        const sql = "SELECT * FROM localdoacao";
        const result = await db.consulta(sql);
        console.log(result);
        return result;
    }
    

}

//INSERT INTO localdoacao (local_nomerua,local_numero,local_bairro,local_cidade,local_estado,usuario_id_usu) values('#1','#2','#3','#4','#5',#6)"