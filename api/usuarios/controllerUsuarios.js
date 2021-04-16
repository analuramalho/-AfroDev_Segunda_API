const jwt = require('jsonwebtoken')
const Usuario = require('./Usuario')
const crypto = require('crypto')

function criarToken(usuario){
    const payload = {
        id:usuario.id
    }

    return jwt.sign(payload,process.env.JWT_KEY)
}

module.exports = {
    login:(req,res)=>{
        const accessToken = criarToken(req.user)
        res.set('Authorization', accessToken)
        res.status(200).send()
    }
}