const itens = require('../model/itensDoacao');

module.exports = app => {

    app.get('/itensDoacao', async (req, res) => {
        const client = await app.db.connect();
        const p = await client.query('SELECT * from ItensDoacao');
        res.status(200).send(p.rows)
        client.release();
    })

    app.post('/itensDoacao', async (req, res) => {
        const user = { ...req.body }
        let novo = new itens(user.cod, user.nome, user.descricao, user.quantidade, user.tipo, user.campanha)
        const client = await app.db.connect();
        let aux = "INSERT INTO ItensDoacao(itens_id, itens_nomeItem, itens_quantidade, itens_tipoDoacao_id, itens_unidadeMedida_id, itens_tamanho_id, itens_genero_id, itens_doacao_id) values('#1','#2','#3','#4','#5','#6','#7','#8')"
        let sql = aux.replace('#1', novo.getCod())
        sql = sql.replace('#2', novo.getNome())
        sql = sql.replace('#3', novo.getQuantidade())
        sql = sql.replace('#4', novo.getTipo())
        sql = sql.replace('#5', novo.getUnidadeMedida())
        sql = sql.replace('#6', novo.getTamanho())
        sql = sql.replace('#7', novo.getGenero())
        sql = sql.replace('#8', novo.getCampanha())
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

    app.delete('/itensDoacao', async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const client = await app.db.connect();
        let aux = "DELETE FROM ItensDoacao where itens_id = "+user.cod
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

    app.put('/itensDoacao', async (req, res) => {
        const user = { ...req.body }
        console.log(user)
        const client = await app.db.connect();
        let aux = "UPDATE ItensDoacao SET itens_nomeitens = '#1', itens_quantidade = '#2', itens_tipoDoacao_id = '#3', itens_unidadeMedida_id = '#4', itens_tamanho_id = '#5', itens_genero_id = '#6', itens_doacao_iddoacao = '#7' WHERE itens_id = '#8'"
        let sql = aux.replace('#1', user.nome)
        sql = sql.replace('#2', user.quantidade)
        sql = sql.replace('#3', user.tipo)
        sql = sql.replace('#4', user.unidadeMedida)
        sql = sql.replace('#5', user.tamanho)
        sql = sql.replace('#6', user.genero)
        sql = sql.replace('#7', user.campanha)
        sql = sql.replace('#8', user.cod)
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

    app.get('/itensDoacao/:cod', async (req, res) => {
        const client = await app.db.connect();
        const p = await client.query('SELECT * from ItensDoacao where itens_id = ' + req.params.cod);
        res.status(200).send(p.rows)
        client.release();
    })    

}