const local = require ('../model/LocalDoacao');

module.exports = app => {

    app.get('/LocalDoacao', async (req, res) => {
        const client = await app.db.connect();
        const p = await client.query('SELECT * from localdoacao');
        res.status(200).send(p.rows)
        client.release();
    })
    
    app.post('/LocalDoacao', async (req, res) => {
        const user = { ...req.body }
        let novo = new local(user.nomeRua, user.numero, user.bairro, user.cidade, user.estado, 2)
        const client = await app.db.connect();
        let aux = "INSERT INTO localdoacao (local_nomerua,local_numero,local_bairro,local_cidade,local_estado,usuario_id_usu) values('#1','#2','#3','#4','#5','#6')"
        let sql = aux.replace('#1', novo.getNomeRua())
        sql = sql.replace('#2', novo.getNumero())
        sql = sql.replace('#3', novo.getBairro())
        sql = sql.replace('#4', novo.getCidade())
        sql = sql.replace('#5', novo.getEstado())
        sql = sql.replace('#6', novo.getUsuarioId())
        console.log(sql)
        try {
            const p = await client.query(sql);
            console.log("sucesso")
            res.status(200).json("inserido com sucesso")
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }    
    })

    app.delete('/LocalDoacao', async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const client = await app.db.connect();
        let aux = "DELETE FROM local_doacao where local_id = "+user.cod
        console.log(aux)
        try {
            const p = await client.query(aux)
            console.log("sucesso")
            res.status(200).json("deletado com sucesso")
        } catch (err) {
            console.log(err)
            res.status(400).json("erro na insercao")
        }
    })

    app.put('/LocalDoacao', async (req, res) => {
        const user = { ...req.body }
        let novo = new local(user.cod, user.nomeRua, user.numero, user.bairro, user.cidade, user.estado, user.usuarioId)
        const client = await app.db.connect();
        let aux = "UPDATE local_doacao SET local_nomeRua = '#2', local_numero = '#3', local_bairro = '#4', local_cidade = '#5', local_estado = '#6',usuario_id_usu = '#8' WHERE local_id = '#1'"
        let sql = aux.replace('#1', novo.getCod())
        sql = sql.replace('#2', novo.getNomeRua())
        sql = sql.replace('#3', novo.getNumero())
        sql = sql.replace('#4', novo.getBairro())
        sql = sql.replace('#5', novo.getCidade())
        sql = sql.replace('#6', novo.getEstado())
        sql = sql.replace('#8', novo.getUsuarioId())
        console.log(sql)
        try {
            const p = await client.query(sql);
            console.log("sucesso")
            res.status(200).json("atualizado com sucesso")
        } catch (err) {
            console.log(err)
            res.status(400).json("erro na insercao")
        }
    })
}
