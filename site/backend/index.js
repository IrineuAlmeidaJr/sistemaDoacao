// const app = require('express')()
// const consign = require('consign')
// app.db = require('./config/db.js')
// consign()
//  .include('./config/passport.js')
//  .then('./config/middlewares.js')
//  .then('./config/routes.js')
//  .into(app)

// app.listen(4000, () =>{
//     console.log('servidor esta executando na porta 4000')
// })
const express = require('express');
const routes = require('./routes');
const app = express();
app.use(express.json()); 
app.use(routes);
app.listen(4000, () => console.log('servidor esta executando na porta 4000'))

