const TabelaAgendamento = require('../../models/agendamentos/TabelaAgendamento')
const Agendamento = require('../../services/agendamentos/Agendamento')
const SerializadorAgendamento = require('../../shared/Serializar').SerializarAgendamento

module.exports={
    criarAgendamento: async (req, resp, next) => {
        try {
            const results =  await TabelaAgendamento.listar()
            const serializador = new SerializadorAgendamento(
                res.getHeader('Content-Type'),
                ['status']
            )
            const result = serializador.transformar(results)
            res.status(200).send(result)
        } catch (error) {
            next(error)
        }
    },

    listarAgendamento:async (req, resp, next) => {
        try {
            const id = req.params.idAgendamento;
            const agendamento = new Agendamento({id:id});
            await agendamento.buscar();
            const serializador = new SerializadorAgendamento(
                resp.getHeader('Content-Type'),
                ['nome_servico', 'status']
            );
            resp.status(200).send(serializador.transformar(agendamento));
        } catch (error) {
            next(error)
        }
    },

    listarAgendamentos:async (req, resp, next) => {
        try {
            const reqAgendamento = req.body
            const agendamento = new Agendamento(reqAgendamento)
            await agendamento.criar()
            const serializador = new SerializadorAgendamento(
                resp.getHeader('Content-Type'),
                ['status']
            );
            resp.status(201).send(serializador.transformar(agendamento));
        } catch (error) {
            next(error)
        }
        
    },

    atualizarAgendamento: async (req, resp, next) => {
        try{
            const id = req.params.idAgendamento;
            const dadosBody = req.body;
            const dados = Object.assign({}, dadosBody, {id: id})
            const agendamento = new Agendamento(dados);
            await agendamento.atualizar();
            resp.status(204).send();
        } catch (error) {
            next(error)
        }
    },

    excluirAgendamento:async (req, resp, next) => {
        try {
            const id = req.params.idAgendamento;
            const agendamento = new Agendamento({id:id});
            await agendamento.remover();
            resp.status(204).send()
        } catch (error) {
            next(error)
        }
    }
}