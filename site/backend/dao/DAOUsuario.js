module.exports = class DAOUsuario {
    async gravar(usu, db) {
        const sql = "INSERT INTO usuario(usu_cpf, usu_senha, usu_nome, " +
                    "usu_dataNasc, usu_endereco, usu_telefone, usu_email, usu_tipoUsuario)" + 
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        const valor = [usu.getCPF(), usu.getSenha(), usu.getNome(), usu.getData(), 
                    usu.getEndereco(), usu.getTelefone(), usu.getEmail(), usu.getTipo()]; 
        
        const result = await db.manipula(sql,valor);

        return result;        
    } 

    async alterar(usu, db) {
        // Fazer validações aqui --> de CPF tambem
        const sql = "UPDATE usuario SET usu_cpf=? ,usu_senha=?, usu_nome=?,"+
                    "usu_dataNasc=?,usu_endereco=?, usu_telefone=?, "+
                    "usu_email=?, usu_tipoUsuario=? "+
                    "WHERE usu_id=?";
        const valor = [usu.getCPF(), usu.getSenha(), usu.getNome(), usu.getData(), 
                    usu.getEndereco(), usu.getTelefone(), usu.getEmail(), usu.getTipo(),
                    usu.getId()];      
        const result = await db.manipula(sql,valor);  
        console.log(result);                 
    }

    async excluir(usu,db){
        const sql = "DELETE FROM usuario WHERE usu_id=?"
        const valor = [usu.getId()];
        const result = await db.manipula(sql,valor);
        return result;
    }

    async procurarId(id,db){
        const sql = "SELECT * FROM usuario WHERE usu_id=?";        
        const valor = [id];
        const resp = await db.consulta(sql,valor);
        return resp;
    }

    async listar(db) {

        const sql = "SELECT * FROM usuario";
        // Aqui retorna dois campos, então pegamos apenas primeira posição
        const usu = await db.consulta(sql);
        return usu;
    }

    async listarPorNome(nome, db) {
        const sql = 'SELECT * FROM usuario WHERE usu_nome LIKE ? ORDER BY usu_nome';
        const valor = [nome + "%"];
        const usu = await db.consulta(sql, valor);
        return usu;
    }

    async listarPorId(id, db) {
        const sql = 'SELECT * FROM usuario WHERE usu_id = ?';
        const valor = [id];
        const usu = await db.consulta(sql, valor);
        return usu;
    }

}