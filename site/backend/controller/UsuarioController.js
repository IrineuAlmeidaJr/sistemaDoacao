const db = require('../model/Database');
const Usuario = require('../model/Usuario');

module.exports={
    async gravar(request,response) {
        const {nome, senha, cpf, data, endereco, telefone, email, tipo} = request.body;
        // Colocar request.query para testar no Insomia, mas, na verdade aqui ele espera
        // um JSON vindo do front

        // Cria objeto Usuário
        let usuario = new Usuario(0, cpf, senha, nome, data, endereco, telefone, email, tipo);
        // Cria conexão com o banco 
        const con = await db.conecta();        
        // Chama a classe usuário que tem o método gravar que por sua vez chama DAO
        await usuario.gravar(db);

        return response.json(usuario);
    },

    async listar (request, response) {
        // Cria conexão com o banco 
        const con = await db.conecta();
        // Chama a classe usuário que tem o método listar que por sua vez chama DAO
        let usu = await new Usuario().listar(db);

        return response.json(usu);
    },


}