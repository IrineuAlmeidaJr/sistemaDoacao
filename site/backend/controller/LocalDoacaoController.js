const LD = require('../model/LocalDoacao');
const db = require('../model/Database');
const { listarPorId } = require('./BeneficiarioController');

module.exports={

    async gravar(req,res){
    const {id,nomerua, numero, bairro, cidade, estado, usuarioId} = req.body;
    let local = new LD(0,nomerua, numero, bairro, cidade, estado, usuarioId);
    const con = await db.conecta();
    await local.gravar(con);
    return res.json(local);
    },

    async alterar(req,res){
    const {id,nomerua, numero, bairro, cidade, estado, usuarioId} = req.body;
    let local = new LD(id,nomerua, numero, bairro, cidade, estado, usuarioId);
    const con = await db.conecta();
    await local.alterar(con);
    return res.json(local);
    },

    async excluir(req,res){
    const {id} = req.body;
    let local = new LD(id);
    const con = await db.conecta();
    await local.excluir(con);
    return res.json(local);
    },

    async listar(req,res){
    const con = await db.conecta();
    let localdoacao = await new LD().listar(con);
    return res.json(localdoacao);
    },

    async listarPorId (req,res){
        const {id} = req.params;
        const con = await db.conecta();
        let local = await new LD().procurarId(id,con);
        return res.json(local);
    }

}