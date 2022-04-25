const genero = require ('../model/genero');

module.exports = app => {

    app.get('/genero', (req, res) => {
        const client = app.db.connect();
        const p = client.query('SELECT * from genero');
        res.status(200).send(p.rows)
        client.release();
    })

    app.post('/genero', async (req, res) => {
        const user = { ...req.body }
        let novo = new genero(user.cod, user.nome)
        const client = await app.db.connect();
        let aux = "INSERT INTO genero(genero_id, genero_nome) values('#1','#2')"
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

    app.delete('/genero', async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const client = await app.db.connect();
        let aux = "DELETE FROM genero where genero_id = "+user.cod
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

    app.put('/genero', async (req, res) => {
        const user = { ...req.body }
        let novo = new genero(user.cod, user.nome)
        const client = await app.db.connect();
        let aux = "UPDATE genero SET genero_nome = '#2' WHERE genero_id = '#1'"
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

    app.get('/genero/:cod', async (req, res) => {
        const client = await app.db.connect();
        const p = await client.query('SELECT * from genero where genero_id = '+req.params.cod);
        res.status(200).send(p.rows)
        client.release();
    })
}
