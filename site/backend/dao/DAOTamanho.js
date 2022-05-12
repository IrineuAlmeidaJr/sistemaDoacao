const tamanho = require('../model/tamanho')

module.exports = app => {

    app.get('/tamanho', async (req, res) => {
        const client = await app.db.connect();
        const sql ="SELECT * from tamanho"
        const p = await client.query(sql);
        res.status(200).send(p.rows)
        client.release();
    })

    app.post('/tamanho', async (req, res) => {
        const user = { ...req.body }
        let novo = new tamanho(user.tipo)
        const client = await app.db.connect();
        let aux = "INSERT INTO tamanho(tamanho_tam) values('#1')"
        let sql = aux.replace('#1', novo.getNome())
        try {
            const p = await client.query(sql);
            console.log("sucesso")
            res.status(200).json({resp:"inserido com sucesso"})
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }

    })

    app.delete('/tamanho', async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const client = await app.db.connect();
        let aux = "DELETE FROM tamanho where tamanho_id = "+user.cod
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

    app.put('/tamanho', async (req, res) => {
        const user = { ...req.body }
        const client = await app.db.connect();
        let aux = "UPDATE tamanho SET tamanho_tam = '#2' WHERE tamanho_id = #1"
        let sql = aux.replace('#1', user.cod)
        sql = sql.replace('#2', user.tipo)
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