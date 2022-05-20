module.exports = class DAOGenero {

    async gravar(gen, db) {
        const sql = "INSERT INTO genero VALUE (?, ?)";
        const valor = [0, gen.getNome()];         
        const result = await db.manipula(sql,valor);
        return result;        
    } 

    async alterar(gen, db) {
        const sql = "UPDATE genero SET genero_nome=? " +
                    "WHERE genero_id=?";
        const valor = [gen.getNome(), gen.getId()];      
        const result = await db.manipula(sql,valor);  
        console.log(result);                 
    }

    async excluir(gen,db){
        const sql = "DELETE FROM genero WHERE genero_id=?"
        const valor = [gen.getId()];
        const result = await db.manipula(sql,valor);
        return result;
    }

    async procurarId(id,db){
        const sql = "SELECT * FROM genero WHERE genero_id=?";        
        const valor = [id];
        const resp = await db.consulta(sql,valor);
        return resp;
    }

    async listar(db) {
        const sql = "SELECT * FROM genero";
        const gen = await db.consulta(sql);
        return gen;
    }


}
