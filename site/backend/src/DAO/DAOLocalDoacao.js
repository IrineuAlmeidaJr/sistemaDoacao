module.exports= {

    async create(connection, localDoacao) {
        await connection('localDoacao').insert({
            local_nomeRua: localDoacao.getNomeRua(), local_numero: localDoacao.getNumero(), local_bairro: localDoacao.getBairro(), local_cidade: localDoacao.getCidade(), local_estado: localDoacao.getEstado(), CampanhaDoacao_cod: localDoacao.getCodCampanha(), usuario_id_usu: localDoacao.getCodUsuario()
        })
    },
    
    async update(connection, localDoacao) {
        await connection ('localDoacao').update('local_nomeRua', localDoacao.getNomeRua()).update('local_numero', localDoacao.getNumero()).update('local_bairro', localDoacao.getBairro()).update('local_cidade', localDoacao.getCidade()).update('local_estado', localDoacao.getEstado()).update('CampanhaDoacao_cod', localDoacao.getCodCampanha()).update('usuario_id_usu', localDoacao.getCodUsuario()).where('local_cod', localDoacao.getCod());
    },

    async delete(connection, localDoacao) {
        await connection('localDoacao').delete().where('local_cod', localDoacao.getCod());
    },

    async list(connection) {
        const aux = await connection('localDoacao').select('*');
        return aux;
    },

    async ListByCod (connection, cod) {
        const aux = await connection('localDoacao').select('*').where('local_cod', cod);
        return aux;
    }

        
}