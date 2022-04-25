const tipo = require('../model/TipoDoacao');

module.exports = app => {

    app.get('/tipo', (req, res) => {
        const client = app.db.connect();
        const p = client.query('SELECT * from TipoDoacao');
        res.status(200).send(p.rows)
        client.release();
    })

    app.post('/tipo', async (req, res) => {
        const user = { ...req.body }
        let novo = new tipo(user.cod, user.nome)
        const client = await app.db.connect();
        let aux = "INSERT INTO TipoDoacao(tipo_id, tipo_nome) values('#1','#2')"
        let sql = aux.replace('#1', novo.getCod())
        sql = sql.replace('#2', novo.getNome())
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

    app.delete('/tipo', async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const client = await app.db.connect();
        let aux = "DELETE FROM TipoDoacao where tipo_id = "+user.cod
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

    app.put('/tipo', async (req, res) => {
        const user = { ...req.body }
        let novo = new tipo(user.cod, user.nome)
        const client = await app.db.connect();
        let aux = "UPDATE TipoDoacao SET tipo_nome = '#2' WHERE tipo_id = '#1'"
        let sql = aux.replace('#1', novo.getCod())
        sql = sql.replace('#2', novo.getNome())
        console.log(sql)
        try {
            const p = await client.query(sql);
            console.log("sucesso")
            res.status(200).json("atualizado com sucesso")
        } catch (err) {
            console.log(err)
            res.status(400).json("erro na atualizacao")
        }
    })

    app.get('/tipo/:cod', async (req, res) => {
        const client = await app.db.connect();
        let aux = "SELECT * FROM TipoDoacao WHERE tipo_id = '#1'"
        let sql = aux.replace('#1', req.params.cod)
        console.log(sql)
        try {
            const p = await client.query(sql);
            console.log("sucesso")
            res.status(200).json(p.rows)
        } catch (err) {
            console.log(err)
            res.status(400).json("erro na consulta")
        }
    })

}