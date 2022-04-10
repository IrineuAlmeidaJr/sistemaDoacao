/*const {authSecret} = require('../.env')
const passport = require('passport')
const passportJwt = require('passport-jwt')
const {Strategy, ExtractJwt} = passportJwt
const u = require('../models/usuario')
module.exports = app=>{
    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }
    const strategy = new Strategy(params, (payload,done)=>{
        u.find({email: payload.email},(err,user)=>{
            if(err){
                done(err,false)
            }
            else{
                done(null,user?{...payload}:false)
            }
        })
        
        
    })
    passport.use(strategy)
    return {
        authenticate:()=>passport.authenticate('jwt',{session: false})
    }
}*/