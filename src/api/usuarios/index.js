const router = require('express').Router()
const servicoUsuario = require('../../services/usuarios/index')
const passport = require('passport')

router.get('/usuarios',
            passport.authenticate('bearer',{session:false}),
            servicoUsuario.listarUsuarios
        )


router.post('/usuarios',
            passport.authenticate('bearer',{session:false}),
            servicoUsuario.criarUsuarios
        )

router.get('/usuarios/:idUsuario', 
            passport.authenticate('bearer',{session:false}),
            servicoUsuario.listarUsuario
        )


router.put('/usuarios/:idUsuario', 
            passport.authenticate('bearer',{session:false}),
            servicoUsuario.alterarUsuario
        )

router.put('/usuarios/:idUsuario', 
            passport.authenticate('bearer',{session:false}),
            servicoUsuario.removerUsuario
        )
module.exports = router