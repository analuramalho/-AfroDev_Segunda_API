const router = require('express').Router()
const TabelaAgendamento = require('../../agendamentos/TabelaAgendamento')
const Agendamento = require('../../agendamentos/Agendamento')

router.get('/agendamentos', async (req, resp) => {
    const results =  await TabelaAgendamento.listar()
    resp.send(JSON.stringify(results))
});

router.post('/agendamentos',async(req,res)=>{
    const reqAgendamento = req.body
    const agendamento = new Agendamento(reqAgendamento)
    await agendamento.criar()
    res.send(JSON.stringify(agendamento))
})

module.exports = router