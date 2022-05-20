const Unidade = require('../model/unidadeMedida')
const db = require('../model/Database.js')
module.exports = {
    async gravar(req,res){
        const uni = { ...req.body }
        const con = await db.conecta()
        let novo = new Unidade(null,uni.nome)
        await novo.gravar(db)
        return res.json(novo)
    },

    async alterar(req,res){
        const uni = {...req.body}
        const con = await db.conecta()
        let novo = new Unidade(uni.cod,uni.nome)
        await novo.alterar(db)
        return res.json(novo)
    },

    async excluir(req,res){
        const uni = { ...req.body }
        const con = await db.conecta()
        let novo = new Unidade(uni.cod,null)
        await novo.excluir(db)
        return res.json(novo)
    },

    async buscarId(req,res){
        const uni = {...req.body}
        const con = await db.conecta()
        let novo = new Unidade(uni.cod,null)
        await novo.buscarId(novo.getCod(),db)
        return res.json(novo)
    },

    async buscarTodos(req,res){
        const con = await db.conecta()
        let lista = []
        let novo = new Unidade(null,null)
        lista = await novo.listar(db)
        return res.json(lista)
    }
}