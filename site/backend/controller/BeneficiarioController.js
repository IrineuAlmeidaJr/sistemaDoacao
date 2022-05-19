const beneficiario = require('../model/beneficiario');
const db = require('../model/Database.js');

module.exports = {
    async gravar(req, res) {
        const ben = { ...req.body };
        const con = await db.conecta();
        let novo = new beneficiario(ben.cpf, ben.nome, ben.dataNascimento, ben.usuarioId);
        await novo.gravar(db);
        return res.json(novo);
    },

    async alterar(req, res) {
        const ben = { ...req.body };
        const con = await db.conecta();
        let novo = new beneficiario(ben.cpf, ben.nome, ben.dataNascimento, ben.usuarioId);
        await novo.alterar(db);
        return res.json(novo);
    },

    async excluir(req, res) {
        const ben = { ...req.body };
        const con = await db.conecta();
        let novo = new beneficiario(ben.cpf, null, null, null);
        await novo.excluir(db);
        return res.json(novo);
    },

    async buscarId(req, res) {
        const ben = { ...req.body };
        const con = await db.conecta();
        let novo = new beneficiario(ben.cpf, null, null, null);
        await novo.buscarId(novo.getCpf(), db);
        return res.json(novo);
    },

    async buscarTodos(req, res) {
        const con = await db.conecta();
        let lista = [];
        let novo = new beneficiario(null, null, null, null);
        lista = await novo.listar(db);
        console.log(lista);
        return res.json(lista);
    }    
}