const modeloAgendamento = require('./modelTabelaAgendamentos');

module.exports = {
    async listar() {
        return await modeloAgendamento.findAll({
            raw: true,    
        });
    },

    async adicionar(agendamento){
        return await modeloAgendamento.create(agendamento)
    },

    async buscarPorPk(id){
        return await modeloAgendamento.findByPk(id)
    },

    async remover(id) {
        return await modeloAgendamento.destroy({
            where: {
                id: id
            }
        });
    },
   
    async atualizar(id, dados) {
        return await modeloAgendamento.update(dados, 
            {
                where: {
                    id:id
                }
            })
    }
}