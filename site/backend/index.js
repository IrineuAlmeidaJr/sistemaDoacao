const app = require('express')()
const consign = require('consign')
consign()
 .include('./config/passport.js')
 .then('./config/middlewares.js')
 .into(app)


app.listen(3000, () =>{
    console.log('servidor esta executando na porta 3000')
})