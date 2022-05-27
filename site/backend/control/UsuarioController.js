const db = require('../model/Database');
const Usuario = require('../model/usuario');

function validaCPF(val) {
    if (val.length == 14) { 
        var cpf = val.trim();
        cpf = cpf.replace(/\./g, '');
        cpf = cpf.replace('-', '');
        cpf = cpf.split('');
        
        var v1 = 0;
        var v2 = 0;
        var aux = false;
        
        for (var i = 1; cpf.length > i; i++) {
            if (cpf[i - 1] != cpf[i]) {
                aux = true;   
            }
        } 
        
        if (aux == false) {
            return false; 
        } 
        
        for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
            v1 += cpf[i] * p; 
        } 
        
        v1 = ((v1 * 10) % 11);
        
        if (v1 == 10) {
            v1 = 0; 
        }
        
        if (v1 != cpf[9]) {
            return false; 
        } 
        
        for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
            v2 += cpf[i] * p; 
        } 
        
        v2 = ((v2 * 10) % 11);
        
        if (v2 == 10) {
            v2 = 0; 
        }
        
        if (v2 != cpf[10]) {
            return false; 
        } else {   
            return true; 
        }
    }
    return false 
}

module.exports = {    

    async gravar(request,response) {
        const {nome, senha, cpf, dataNascimento, endereco, telefone, email, tipo} = request.body;
        // Colocar request.query para testar no Insomia, mas, na verdade aqui ele espera
        // um JSON vindo do front
        let usuario = {}
        // Valida CPF
        if(validaCPF(cpf)) {
            // Cria objeto Usuário
            usuario = new Usuario(0, cpf, senha, nome, dataNascimento, endereco, telefone, email, tipo);
            // Cria conexão com o banco 
            const con = await db.conecta();        
            // Chama a classe usuário que tem o método gravar que por sua vez chama DAO
            await usuario.gravar(db);
        } else {
            usuario = { 
                message: 'CPF Inválido',
            }            
        }
        return response.json(usuario)        
    },

    async alterar(request,response) {
        const {id, cpf, senha, nome, dataNascimento, endereco, telefone, email, tipo} = request.body;
        let usuario = new Usuario(id, cpf, senha, nome, dataNascimento, endereco, telefone, email, tipo);
        const con = await db.conecta();      
        await usuario.alterar(db);
        return response.json(usuario);
    },

    async excluir(request,response) {
        const {usu_id} = request.params;
        // *** DUVIDA-> se o usuário estiver cadastrado em uma campanha e eu desejar excluir
        // é melhor permitir (Delete Cascate) ou deixa o padrão que proibir que seja deletado?
        const con = await db.conecta(); 
        let usuario = await new Usuario().procurarId(usu_id, db);
        if(Object.keys(usuario).length !== 0) {
            await usuario.excluir(db);
        }
        return response.json(usuario);
    },

    async listarPorId (request, response) {
        const {usu_id} = request.params;
        const con = await db.conecta();
        let usu = await new Usuario().listarPorId(usu_id, db);
        return response.json(usu);
    },

    async listarPorNome (request, response) {
        const {usu_nome} = request.params;
        const con = await db.conecta();
        let usu = await new Usuario().listarPorNome(usu_nome, db);
        return response.json(usu);
    },

    async listar (request, response) {
        // Cria conexão com o banco 
        const con = await db.conecta();
        // Chama a classe usuário que tem o método listar que por sua vez chama DAO
        let usu = await new Usuario().listar(db);

        return response.json(usu);
    },

    async buscaEmail (request, response) {
        const {usu_email} = request.params;
        const con = await db.conecta();
        let usu = await new Usuario().buscarEmail(usu_email, db);
        console.log(usu);
        return response.json(usu);
    },

}