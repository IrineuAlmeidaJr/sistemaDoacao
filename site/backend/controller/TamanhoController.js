const tamanho = require('../model/tamanho')
const db = require('../model/Database.js')
module.exports = {
    async gravar(req,res){
        const tam = { ...req.body }
        const con = await db.conecta()
        let novo = new tamanho(null,tam.nome)
        await novo.gravar(db)
        return res.json(novo)
    },

    async alterar(req,res){
        const tam = {...req.body}
        const con = await db.conecta()
        let novo = new tamanho(tam.cod,tam.nome)
        await novo.alterar(db)
        return res.json(novo)
    },

    async excluir(req,res){
        const tam = { ...req.body }
        const con = await db.conecta()
        let novo = new tamanho(tam.cod,null)
        await novo.excluir(db)
        return res.json(novo)
    },

    async buscarId(req,res){
        const tam = {...req.body}
        const con = await db.conecta()
        let novo = new tamanho(tam.cod,null)
        await novo.buscarId(novo.getCod(),db)
        return res.json(novo)
    },

    async buscarTodos(req,res){
        const con = await db.conecta()
        let lista = []
        let novo = new tamanho(null,null)
        lista = await novo.listar(db)
        return res.json(lista)
    }
}