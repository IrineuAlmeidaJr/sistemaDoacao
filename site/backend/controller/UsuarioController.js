const axios = require('axios');
const db = require('../model/Database');
const usuario = require('../model/usuario.js'); // Usa na hora de procura, fazer depois procurar



module.exports = {
    async gravar(request,response) {
        const {cpf, senha, data, endereco, telefone, email, tipo} = request.body;

        // Verifica se Usuário já está cadastrado
        const con = await db.conecta();
        const sql = "INSERT INTO usuario(cpf_usu, senha_usu, nome_usu, " +
                    "datanasc_usu, endereco_usu, telefone_usu, email_usu, tipo_usuario)" + 
                    "values(?, ?, ?, ?, ?, ?, ?, ?)";
        const valor = [cpf, senha, data, endereco, telefone, email, tipo]; 
        
        const result = await db.manipula(sql,valor);

        return response.json(result);        
    }, 

    async alterar(request,response){
        // const {cpf, senha, data, endereco, telefone, email, tipo} = request.body;        
      
        // const con = await db.conecta();
        // const sql = "UPDATE Cliente SET cli_bairro = ?,cli_rua=?, "+
        //             "cli_cidade=?,cli_uf=?,cli_cep=? "+
        //             "WHERE pes_cod = ?";
        
        // const valor = [cli_bairro,cli_rua,cli_cidade,cli_uf,cli_cep,pes_cod];
        // const result = await db.manipula(sql,valor);
        // return response.json(result);
        // *** FAZER O ALTERAR
    },

    async listar (request, response) {
        // Tem Fazer a Conexão
        const con = await db.conecta();
        const sql = "SELECT * FROM usuario";
        // Aqui retorna dois campos, então pegamos apenas primeira posição
        const usuario = await db.consulta(sql);
        return response.json(usuario.data);
    },

}



// app=>{
// app.get('/usuario',async(req,res)=>{
//     const client = await app.db.connect();
//     const p = await client.query('SELECT * from usuario');
//     res.status(200).send(p.rows)
//     client.release();
// })
// app.post('/usuario',async(req,res)=>{
//     const user = {...req.body}
//     let novo = new usuario(user.cpf,user.senha,user.nome,user.data,user.endereco,user.telefone,user.email,user.tipo)
//     const client = await app.db.connect();
//     let aux = "INSERT INTO usuario(cpf_usu, senha_usu, nome_usu, datanasc_usu, endereco_usu, telefone_usu, email_usu, tipo_usuario) values('#1','#2','#3','#4','#5','#6','#7',#8)"
//     let sql = aux.replace('#1',novo.getCPF())
//     sql = sql.replace('#2',novo.getSenha())
//     sql = sql.replace('#3',novo.getNome())
//     sql = sql.replace('#4',novo.getData())
//     sql = sql.replace('#5',novo.getEndereco())
//     sql = sql.replace('#6',novo.getTelefone())
//     sql = sql.replace('#7',novo.getEmail())
//     sql = sql.replace('#8',novo.getTipo())
//     console.log(sql)
//     try{
//         const p = await client.query(sql);
//         console.log("sucesso")
//         res.status(200).json("inserido com sucesso")
//     }catch(err){
//         console.log(err)
//         res.status(400).json(err)
//     }

// })
// app.delete('/usuario',async(req,res)=>{
//     const user = {...req.body}
//     console.log(user)
//     const client = await app.db.connect();
//     let aux = "DELETE FROM usuario where id_usu = "+user.id
//     console.log(aux)
//     try{
//         const p = await client.query(aux)
//         console.log("sucesso")
//         res.status(200).json("deletado com sucesso")
//     }catch(err){
//         console.log(err)
//         res.status(400).json("erro na insercao")
//     }
// })
// }