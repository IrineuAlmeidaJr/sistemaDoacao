const teste = require('../model/teste.js')
module.exports = app=>{
app.get('/teste',async(req,res)=>{
    const client = await app.db.connect();
    const p = await client.query('SELECT * from teste');
    res.status(200).send(p.rows)
    client.release();
})
app.post('/teste',async(req,res)=>{
    const user = {...req.body}
    let novo = new teste(user.nome)
    const client = await app.db.connect();
    let aux = "INSERT INTO teste(nome) values('#1')"
    let sql = aux.replace('#1',novo.getNome())
    console.log(sql)
    try{
        const p = await client.query(sql);
        res.status(200).send("inserido com sucesso")
    }catch(err){
        res.status(400).send(err)
    }

})
}