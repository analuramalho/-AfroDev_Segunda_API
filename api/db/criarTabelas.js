const ModeloTabelaAgendamento = require('../agendamentos/modelTabelaAgendamentos');

ModeloTabelaAgendamento.sync()
    .then(()=> {
        console.log('Tabela criada com sucesso')
    })
    .catch(
        console.log('Erro, tabela não criada')
    );
    