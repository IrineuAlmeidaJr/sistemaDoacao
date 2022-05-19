const doacao = require('../model/Doacao');

module.exports = app => {

    app.get('/doacao', async (req, res) => {
        const client = await app.db.connect();
        const p = await client.query('SELECT * from Doacao');
        res.status(200).send(p.rows)
        client.release();
    })

    app.post('/doacao', async (req, res) => {
        const user = { ...req.body }
        let novo = new doacao(user.cod, user.data, user.codLocal, user.codCampanha, user.codUsuario)
        const client = await app.db.connect();
        let aux = "INSERT INTO doacao(doacao_id, doacao_dataDoacao, doacao_localDoacao_id, doacao_campanhaDoacao_id, usuario_usu_id) values('#1','#2','#3','#4','#5')"
        let sql = aux.replace('#1', novo.getCod())
        sql = sql.replace('#2', novo.getData())
        sql = sql.replace('#3', novo.getCodLocal())
        sql = sql.replace('#4', novo.getCodCampanha())
        sql = sql.replace('#5', novo.getCodUsuario())
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

    app.delete('/doacao', async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const client = await app.db.connect();
        let aux = "DELETE FROM doacao where doacao_id = "+user.cod
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

    app.put('/doacao', async (req, res) => {
        const user = { ...req.body }
        let novo = new doacao(user.cod, user.data, user.codLocal, user.codCampanha, user.codUsuario)
        const client = await app.db.connect();
        let aux = "UPDATE doacao SET doacao_dataDoacao = '#2', doacao_localDoacao_id = '#3', doacao_campanhaDoacao_id = '#4', usuario_usu_id = '#5' WHERE doacao_id = '#1'"
        let sql = aux.replace('#1', novo.getCod())
        sql = sql.replace('#2', novo.getData())
        sql = sql.replace('#3', novo.getCodLocal())
        sql = sql.replace('#4', novo.getCodCampanha())
        sql = sql.replace('#5', novo.getCodUsuario())
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

    app.get('/doacao/:cod', async (req, res) => {
        const client = await app.db.connect();
        const p = await client.query('SELECT * from Doacao where doacao_id = ' + req.params.cod);
        res.status(200).send(p.rows)
        client.release();
    })

}