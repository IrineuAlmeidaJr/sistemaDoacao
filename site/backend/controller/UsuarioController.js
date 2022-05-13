const db = require('../model/Database');
const Usuario = require('../model/Usuario')

module.exports={
    async gravar(request,response) {
        const {nome, senha, cpf, data, endereco, telefone, email, tipo} = request.body;
        const con = await db.conecta();
        let usuario = new Usuario(cpf, senha, nome, data, endereco, telefone, email, tipo);

        await usuario.gravar(db);

        return response.json(usuario);
    }

    // Continuar


}