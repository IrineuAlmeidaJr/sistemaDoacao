const campDoacao = require('../model/CampanhaDoacao.js')

module.exports = app => {

    app.get('/campanhaDoacao', async (req, res) => {
        const client = await app.db.connect();
        const p = await client.query('SELECT * from CampanhaDoacao');
        res.status(200).send(p.rows)
        client.release();
    })

    app.post('/campanhaDoacao', async (req, res) => {
        const user = { ...req.body }
        let novo = new campDoacao(user.cod, user.nome, user.dataInicio, user.dataFim)
        const client = await app.db.connect();
        let aux = "INSERT INTO CampanhaDoacao(campanha_id, campanha_nome, campanha_dataInicio, campanha_dataFim) values('#1','#2','#3','#4')"
        let sql = aux.replace('#1', novo.getCod())
        sql = sql.replace('#2', novo.getNome())
        sql = sql.replace('#3', novo.getDataInicio())
        sql = sql.replace('#4', novo.getDataFim())
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

    app.delete('/campanhaDoacao', async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const client = await app.db.connect();
        let aux = "DELETE FROM CampanhaDoacao where campanha_id = "+user.cod
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

    app.put('/campanhaDoacao', async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const client = await app.db.connect();
        let aux = "UPDATE CampanhaDoacao SET campanha_nome = '#1', campanha_dataInicio = '#2', campanha_dataFim = '#3' WHERE campanha_id = '#4'"
        let sql = aux.replace('#1', user.nome)
        sql = sql.replace('#2', user.dataInicio)
        sql = sql.replace('#3', user.dataFim)
        sql = sql.replace('#4', user.cod)
        console.log(sql)
        try {
            const p = await client.query(sql);
            console.log("sucesso")
            res.status(200).json("atualizado com sucesso")
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }

    })       
}