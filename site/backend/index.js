const app = require('express')()
const consign = require('consign')
app.db = require('./config/db.js')
consign()
 .include('./config/passport.js')
 .then('./config/middlewares.js')
 .then('./config/routes.js')
 .into(app)

app.listen(4000, () =>{
    console.log('servidor esta executando na porta 4000')
})