
const usuario = require('../model/usuario.js');

module.exports = class DAOUsuario{
    async gravar(usu, db) {
        // Verifica se Usuário já está cadastrado
        const sql = "INSERT INTO usuario(usu_cpf, usu_senha, usu_nome, " +
                    "usu_dataNasc, usu_endereco, usu_telefone, usu_email, usu_tipoUsuario)" + 
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        const valor = [usu.getCPF(), usu.getSenha(), usu.getNome(), usu.getData(), 
                    usu.getEndereco(), usu.getTelefone(), usu.getEmail(), usu.getTipo()]; 
        
        const result = await db.manipula(sql,valor);

        return result;        
    } 

    async listar(db) {

        const sql = "SELECT * FROM usuario";
        // Aqui retorna dois campos, então pegamos apenas primeira posição
        const usu = await db.consulta(sql);
        return usu;
    }

}



// module.exports = app=>{
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