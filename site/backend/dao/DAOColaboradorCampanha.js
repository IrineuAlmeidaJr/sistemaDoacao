const ColaboradorCampanha = require('../model/ColaboradorCampanha');

module.export = app => {

    app.get('/colaboradorCampanha', (req, res) => {
        const client = app.db.connect();
        const p = client.query('SELECT * from colaborador_campanha');
        res.status(200).send(p.rows)
        client.release();
    })

    app.post('/colaboradorCampanha', async (req, res) => {
        const user = { ...req.body }
        let novo = new ColaboradorCampanha(user.cod, user.nome)
        const client = await app.db.connect();
        let aux = "INSERT INTO colaborador_campanhaDoacao(usuario_id_usu, campanhaDoacao_id) values('#1','#2')"
        let sql = aux.replace('#1', novo.getUsuarioId())
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

    app.delete('/colaboradorCampanha', async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const client = await app.db.connect();
        let aux = "DELETE FROM colaborador_campanhaDoacao where usuario_id_usu = "+user.cod
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

    app.put('/colaboradorCampanha', async (req, res) => {
        const user = { ...req.body }
        let novo = new ColaboradorCampanha(user.cod, user.nome)
        const client = await app.db.connect();
        let aux = "UPDATE colaborador_campanhaDoacao SET campanhaDoacao_id = '#2' WHERE usuario_id_usu = '#1'"
        let sql = aux.replace('#1', novo.getUsuarioId())
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