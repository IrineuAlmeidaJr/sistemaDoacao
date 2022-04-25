const inscricao = require('../model/inscricao');

module.export = app => {

    app.get('/inscricao', (req, res) => {
        const client = app.db.connect();
        const p = client.query('SELECT * from inscricao');
        res.status(200).send(p.rows)
        client.release();
    })

    app.post('/inscricao', async (req, res) => {
        const user = { ...req.body }
        let novo = new inscricao(user.beneficiarioId,user.campanhaId)
        const client = await app.db.connect();
        let aux = "INSERT INTO inscricao(beneficiario_bene_id, campanhaDoacao_campanha_id) values('#1','#2')"
        let sql = aux.replace('#1', novo.getBeneficiarioId())
        sql = sql.replace('#2', novo.getCampanhaId())
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

    app.delete('/inscricao', async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const client = await app.db.connect();
        let aux = "DELETE FROM inscricao where beneficiario_bene_id = "+user.beneficiarioId
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

    app.put('/inscricao', async (req, res) => {
        const user = { ...req.body }
        let novo = new inscricao(user.beneficiarioId,user.campanhaId)
        const client = await app.db.connect();
        let aux = "UPDATE inscricao SET campanhaDoacao_campanha_id = '#2' WHERE beneficiario_bene_id = '#1'"
        let sql = aux.replace('#1', novo.getBeneficiarioId())
        sql = sql.replace('#2', novo.getCampanhaId())
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