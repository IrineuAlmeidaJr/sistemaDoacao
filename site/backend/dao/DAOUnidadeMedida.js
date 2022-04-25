const unidade = require('../model/unidadeMedida');

module.export = app => {

    app.get('/unidade', async (req, res) => {
        const client = await app.db.connect();
        const p = await client.query('SELECT * from unidadeMedida');
        res.status(200).send(p.rows)
        client.release();
    })

    app.post('/unidade', async (req, res) => {
        const user = { ...req.body }
        let novo = new unidade(user.cod, user.nome)
        const client = await app.db.connect();
        let aux = "INSERT INTO unidadeMedida(uni_id, uni_nome) values('#1','#2')"
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

    app.delete('/unidade', async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const client = await app.db.connect();
        let aux = "DELETE FROM unidadeMedida where uni_id = "+user.cod
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

    app.put('/unidade', async (req, res) => {
        const user = { ...req.body }
        let novo = new unidade(user.cod, user.nome)
        const client = await app.db.connect();
        let aux = "UPDATE unidadeMedida SET uni_nome = '#2' WHERE uni_id = '#1'"
        let sql = aux.replace('#1', novo.getCod())
        sql = sql.replace('#2', novo.getNome())
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