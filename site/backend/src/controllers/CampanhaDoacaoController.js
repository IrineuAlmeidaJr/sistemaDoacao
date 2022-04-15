const connection = require('../database/connection');
const campanhaDoacao = require('../model/CampanhaDoacao');

module.exports = {

    async create(req, res) {
        const { campanha_nome, campanha_dataInicio, campanha_dataFim, usuario_id_usu } = req.body;
        const campanha = new campanhaDoacao(null,campanha_nome, campanha_dataInicio, campanha_dataFim, usuario_id_usu);
        await campanha.save(connection);
        return res.json();
    },

    async update(req, res) {
        const {id}= req.params;
        const { campanha_nome, campanha_dataInicio, campanha_dataFim, usuario_id_usu } = req.body;
        const campanha = new campanhaDoacao(id,campanha_nome, campanha_dataInicio, campanha_dataFim, usuario_id_usu);
        await campanha.update(connection);
        return res.json();
    },

    async delete(req, res) {
        const {id}= req.params;
        const campanha = new campanhaDoacao(id);
        await campanha.delete(connection);
        return res.json();
    },

    async list(req, res) {
        return res.json(await new campanhaDoacao().list(connection));
    },

    async ListByCod(req, res) {
        return res.json(await new campanhaDoacao(res.params.id).ListByCod(connection));
    }
}