const CampanhaDoacao = require('../model/CampanhaDoacao')
const db = require('../model/Database.js')
module.exports = {
    async gravar(req,res){
        const camp = { ...req.body }
        const con = await db.conecta()
        let novo = new CampanhaDoacao(null,camp.nome,camp.dataInicio,camp.dataFim)
        await novo.gravar(db)
        return res.json(novo)
    },

    async alterar(req,res){
        const camp = {...req.body}
        const con = await db.conecta()
        let novo = new CampanhaDoacao(camp.cod,camp.nome,camp.dataInicio,camp.dataFim)
        await novo.alterar(db)
        return res.json(novo)
    },

    async excluir(req,res){
        const camp = { ...req.body }
        const con = await db.conecta()
        let novo = new CampanhaDoacao(camp.cod,null,null,null)
        await novo.excluir(db)
        return res.json(novo)
    },

    async buscarId(req,res){
        const camp = {...req.body}
        const con = await db.conecta()
        let novo = new CampanhaDoacao(camp.cod,null,null,null)
        await novo.buscarId(novo.getCod(),db)
        return res.json(novo)
    },

    async buscarTodos(req,res){
        const con = await db.conecta()
        let lista = []
        let novo = new CampanhaDoacao(null,null,null,null)
        lista = await novo.listar(db)
        return res.json(lista)
    }
}