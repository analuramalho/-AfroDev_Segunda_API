const router = require('express').Router()
const servicoAgendamento = require('../../services/agendamentos/index')
const passport = require('passport')

router.get('/agendamentos', 
            passport.authenticate('bearer',{session:false}),
            servicoAgendamento.listarAgendamentos
        );

router.post('/agendamentos', 
            passport.authenticate('bearer',{session:false}),
            servicoAgendamento.criarAgendamento
        )

router.get('/agendamentos/:idAgendamento',
            passport.authenticate('bearer',{session:false}),
            servicoAgendamento.listarAgendamento
        );

router.put('/agendamentos/:idAgendamento',
            passport.authenticate('bearer',{session:false}),
            servicoAgendamento.atualizarAgendamento
        )

router.delete('/agendamentos/:idAgendamento',
                passport.authenticate('bearer',{session:false}),
                servicoAgendamento.excluirAgendamento
            );

module.exports = router