const tamanho = require('../model/tamanho')

module.exports = {
    async gravar(req,res){
        const tam = { ...req.body }
        const con = await db.conecta()
        let novo = new tamanho(tam.cod,tam.nome)
        await novo.gravar(db)
        return res.json(novo)
    }
}