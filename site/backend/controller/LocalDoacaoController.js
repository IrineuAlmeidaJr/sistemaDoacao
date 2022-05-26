const LD = require('../model/LocalDoacao');
const db = require('../model/Database');


module.exports={

    async gravar(req,res){
    const {id,nomeRua, numero, bairro, cidade, estado, usuarioId} = req.body;
    let local = new LD(0,nomeRua, numero, bairro, cidade, estado, usuarioId);
    const con = await db.conecta();
    await local.gravar(db);
    return res.json(local);
    },

    async alterar(req,res){
    const {id,nomeRua, numero, bairro, cidade, estado, usuarioId} = req.body;
    let local = new LD(id,nomeRua, numero, bairro, cidade, estado, usuarioId);
    const con = await db.conecta();
    await local.alterar(db);
    return res.json(local);
    },

    async excluir(req,res){
        const {id} =req.params;
        console.log("controler id excluir: "+id);
        const con = await db.conecta();
        let local = await new LD().procurarId(id,db);
        if(Object.keys(local).length !==0){
            await local.excluir(db);
        }
        return res.json(local);
    },

    async listar(req,res){
    const con = await db.conecta();
    let localdoacao = await new LD().listar(db);
    return res.json(localdoacao);
    },

    async listarPorId (req,res){
        const {id} = req.params;
        const con = await db.conecta();
        let local = await new LD().procurarId(id,db);
        return res.json(local);
    }

}