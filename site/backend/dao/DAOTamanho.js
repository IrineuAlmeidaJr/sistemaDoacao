
module.exports = class DAOTamanho {

    async listar(db){
        const sql ="SELECT * from tamanho"
        const p = await db.consulta(sql,null);
        console.log(p)
        return p;
    }
    async listarId(id,db){
        const sql = "SELECT * from tamanho where tamanho_id = ?"
        const valor = [id]
        const p = await db.consulta(sql,valor);
        return p;
    }

    async gravar(tam, db){
        let sql = "INSERT INTO tamanho(tamanho_tam) values(?)"
        const valor = [tam.getNome()]
        const p = await db.manipula(sql,valor)
        console.log(p)
        return p
    }

    async deletar(tam,db){
        let sql = "DELETE FROM tamanho where tamanho_id = ?"
        const valor = [tam.getId()]
        const p = await db.manipula(sql,valor)
        return p
    }

    async alterar(tam,db){
        let sql = "UPDATE tamanho SET tamanho_tam = ? WHERE tamanho_id = ?"
        const valor = [tam.getId(),tam.getNome()]
        const p = await db.manipula(sql,valor)
        return p
    }


    

}