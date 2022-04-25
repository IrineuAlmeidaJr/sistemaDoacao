const beneficiario = require('../model/beneficiario');

module.export = app => {

    app.get('/beneficiario', (req, res) => {
        const client = app.db.connect();
        const p = client.query('SELECT * from beneficiario');
        res.status(200).send(p.rows)
        client.release();
    })

    app.post('/beneficiario', async (req, res) => {
        const user = { ...req.body }
        let novo = new beneficiario(user.id, user.cpf, user.nome, user.dataNasc, user.usuarioId)
        const client = await app.db.connect();
        let aux = "INSERT INTO beneficiario(bene_id, bene_cpf, bene_nome, bene_dataNascimento, usuario_id_usu) values('#1','#2','#3','#4','#5')"
        let sql = aux.replace('#1', novo.getId())
        sql = sql.replace('#2', novo.getCpf())
        sql = sql.replace('#3', novo.getNome())
        sql = sql.replace('#4', novo.getDataNasc())
        sql = sql.replace('#5', novo.getUsuarioId())
        console.log(sql)
        try {
            const p = await client.query(sql);
            console.log("sucesso")
            res.status(200).json("inserido com sucesso")
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err)
        }   
    })

    app.delete('/beneficiario', async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const client = await app.db.connect();
        let aux = "DELETE FROM beneficiario where bene_id = "+user.id
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

    app.put('/beneficiario', async (req, res) => {
        const user = { ...req.body }
        let novo = new beneficiario(user.id, user.cpf, user.nome, user.dataNasc, user.usuarioId)
        const client = await app.db.connect();
        let aux = "UPDATE beneficiario SET bene_cpf = '#2', bene_nome = '#3', bene_dataNasc = '#4', usuario_id_usu = '#5' WHERE bene_id = '#1'"
        let sql = aux.replace('#1', novo.getId())
        sql = sql.replace('#2', novo.getCpf())
        sql = sql.replace('#3', novo.getNome())
        sql = sql.replace('#4', novo.getDataNasc())
        sql = sql.replace('#5', novo.getUsuarioId())
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