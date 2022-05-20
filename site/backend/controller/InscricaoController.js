const inscricao = require('../model/inscricao')
const db = require('../model/Database.js')
const B = require('../model/beneficiario')
const C = require('../model/CampanhaDoacao')
module.exports = {
    async gravar(req,res){
        const ins = { ...req.body }
        const con = await db.conecta()
        let today = Date.now()
        const data = new Date(today);
        let novo = new inscricao(await new B().procurarId(ins.bene_id,db), await new C().buscarId(ins.campanha_id,db),data)
        await novo.gravar(db) 
        return res.json(novo)
    },
    async excluir(req,res){
        const ins = { ...req.body }
        const con = await db.conecta()
        let novo = new inscricao(new B().getid(ins.bene_id), new C().getCod(ins.campanha_id),null)
        await novo.excluir(db)
        return res.json(novo)
    },
    async buscarId(req,res){
        const ins = {...req.body}
        const con = await db.conecta()
        let novo = new inscricao(new B().getid(ins.bene_id), new C().getCod(ins.campanha_id),null)
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