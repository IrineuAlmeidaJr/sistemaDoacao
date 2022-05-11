const beneficiario = require('../model/beneficiario');

module.exports = app => {

    app.get('/Beneficiario', async (req, res) => {
        const client = await app.db.connect();
        const sql=('SELECT * from beneficiario');
        const p = await client.query(sql);
        res.status(200).send(p.rows)
        client.release();
    })

    app.post('/Beneficiario', async (req, res) => {
        console.log(req.body)
        const user = { ...req.body }
        let novo = new beneficiario(user.cpf, user.nome, user.dataNascimento, user.usuarioId)
        const client = await app.db.connect();
        let aux = "INSERT INTO beneficiario(bene_cpf, bene_nome, bene_datanascimento, usuario_id_usu) values('#1','#2','#3',#4)"
        let sql = aux.replace('#1', novo.getCpf())
        sql = sql.replace('#2', novo.getNome())
        sql = sql.replace('#3', novo.getDataNasc())
        sql = sql.replace('#4', novo.getUsuarioId())
        console.log(sql)
        try {
            const p = await client.query(sql);
            res.status(200).json("inserido com sucesso")
        }
        catch (err) {
            //check if the error is because the cpf is already in the database
            if (err.code === '23505') {
                res.status(400).json("erro na insercao")
            //check if the error is because a null value was inserted
            } else if (err.code === '22007') {
                res.status(401).json("erro na insercao")
            }
        }   
    })

    app.delete('/Beneficiario', async (req, res) => {
        const user = { ...req.body }
        const client = await app.db.connect();
        let aux = "DELETE FROM beneficiario where bene_id = "+user.cod
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

    app.put('/Beneficiario', async (req, res) => {
        const user = { ...req.body }
        const client = await app.db.connect();
        let aux = "UPDATE beneficiario SET bene_cpf = '#2', bene_nome = '#3', bene_datanascimento = '#4', usuario_id_usu = '#5' WHERE bene_id = '#1'"
        let sql = aux.replace('#1',user.id)
        sql = sql.replace('#2', user.cpf)
        sql = sql.replace('#3', user.nome)
        sql = sql.replace('#4', user.dataNascimento)
        sql = sql.replace('#5', user.usuarioId)
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