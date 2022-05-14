const inscricao = require('../model/inscricao')
const db = require('../model/Database.js')

module.exports = {
    async gravar(req,res){
        const ins = { ...req.body }
        const con = await db.conecta()
        let novo = new inscricao(ins.bene_id, ins.campanha_id,ins.data)
        await novo.gravar(db)
        return res.json(novo)
    },
    async excluir(req,res){
        const ins = { ...req.body }
        const con = await db.conecta()
        let novo = new inscricao(ins.bene_id,ins.campanha_id,null)
        await novo.excluir(db)
        return res.json(novo)
    },
    async buscarId(req,res){
        const ins = {...req.body}
        const con = await db.conecta()
        let novo = new inscricao(ins.bene_id,ins.campanha_id,null)
        await novo.buscarId(db)
        return res.json(novo)
    },
    async buscarTodos(req,res){
        const con = await db.conecta()
        let lista = []
        let novo = new inscricao(null,null,null)
        lista = await novo.listar(db)
        return res.json(lista)
    }
}