module.exports={

    async create(connection, campanha){
        await connection('campanhaDoacao').insert({
            campanha_nome: campanha.getNome(), campanha_dataInicio: campanha.getDataInicio(), campanha_dataFim: campanha.getDataFim(), usuario_id_usu: campanha.getCodUsuario()
        })
    },

    async update(connection, campanha){
        await connection ('campanhaDoacao').update('campanha_nome', campanha.getNome()).update('campanha_dataInicio', campanha.getDataInicio()).update('campanha_dataFim', campanha.getDataFim()).update('usuario_id_usu', campanha.getCodUsuario()).where('campanha_cod', campanha.getCod());
    },

    async delete(connection, campanha){
        await connection('campanhaDoacao').delete().where('campanha_cod', campanha.getCod());
    },

    async list(connection){
        const aux = await connection('campanhaDoacao').select('*');
        return aux;
    },

    async ListByCod (connection, cod) {
        const aux = await connection('campanhaDoacao').select('*').where('campanha_cod', cod);
        return aux;
    }

}