const Inscricao = require('../model/Inscricao')
const db = require('../model/Database.js')
const B = require('../model/beneficiario')
const C = require('../model/CampanhaDoacao')
module.exports = {
    async gravar(req,res){
        const ins = { ...req.body }
        const con = await db.conecta()
        let today = Date.now()
        const data = new Date(today);
        let novo = new Inscricao(await new B().procurarId(ins.bene_id,db), await new C().buscarId(ins.campanha_id,db),data)
        let obj
        obj = await novo.buscarId(db)
        if(obj==null){
            await novo.gravar(db)
        }
        else{
            novo = {erro: 1}
        }
        console.log(novo)
        return res.json(novo)
    },
    async excluir(req,res){
        const ins = { ...req.body }
        console.log(ins)
        const con = await db.conecta()
        let novo = new Inscricao(await new B().procurarId(parseInt(ins.bene_id),db), await new C().buscarId(parseInt(ins.campanha_id),db),null)
        console.log(novo)
        await novo.excluir(db)
        return res.json(novo)
    },
    async buscarId(req,res){
        const ins = {...req.body}
        const con = await db.conecta()
        let novo = new Inscricao(new B().procurarId(ins.bene_id,db), new C().buscarId(ins.campanha_id,db),null)
        await novo.buscarId(db)
        return res.json(novo)
    },
    async buscarTodos(req,res){
        const con = await db.conecta()
        let lista = []
        let novo = new Inscricao(null,null,null)
        lista = await novo.listar(db)
        return res.json(lista)
    },
    async buscaCancela(req,res){
        const ins = {...req.params}
        const con = await db.conecta()
        let lista = []
        let novo = new Inscricao(null,null,null)
        lista = await novo.buscaCancela(ins.id,db)
        return res.json(lista)
    }
}