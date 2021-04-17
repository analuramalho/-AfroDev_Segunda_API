const router = require('express').Router()
const serviceLogin = require('../../services/login')
const passport = require('passport')

router.post('/login',passport.authenticate('local',{session:false}), serviceLogin.login)


module.exports = router