const router = require('express').Router()
const TabelaAgendamento = require('../../agendamentos/TabelaAgendamento')
const Agendamento = require('../../agendamentos/Agendamento')

router.get('/agendamentos', async (req, res) => {
    const results =  await TabelaAgendamento.listar()
    res.send(JSON.stringify(results))
});

router.post('/agendamentos',async(req,res)=>{
    const reqAgendamento = req.body
    const agendamento = new Agendamento(reqAgendamento)
    await agendamento.criar()
    res.send(JSON.stringify(agendamento))
})

router.get('/agendamentos/:id', async (req, res) => {
    try {
        const id = req.params.id
        const agendamento = new Agendamento({id:id})
        await agendamento.buscar(agendamento)
        res.send(JSON.stringify(agendamento))

    } catch (error) {
        res.send(JSON.stringify({
            mensage:error.mensage
        }))
    }
});

router.put('agendamentos/:idAgendamento', async (req, resp) => {
    const id = req.params.idAgendamento;
    const dadosBody = req.body;
    const dados = Object.assign({}, dadosBody, {id: id})
    const agendamento = new Agendamento(dados);
    await agendamento.atualizar()
});

router.delete('/agendamentos/:idAgendamento', async (req, resp) => {
    try {
        const id = req.params.idAgendamento;
        const agendamento = new Agendamento({id:id});
        await agendamento.remover();
        resp.send(JSON.stringify({
            mensagem:'Registro removido'
            })
        );
    } catch (error) {
        resp.send(JSON.stringify({
            mensagem: error.message
        }))
    }
});

module.exports = router