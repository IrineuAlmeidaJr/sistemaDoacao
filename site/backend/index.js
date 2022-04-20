const app = require('express')()
const consign = require('consign')
app.db = require('./config/db.js')
consign()
 .include('./config/passport.js')
 .then('./config/middlewares.js')
 .then('./dao')
 .into(app)

app.listen(3000, () =>{
    console.log('servidor esta executando na porta 3000')
})