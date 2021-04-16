class DadosNaoInformados extends Error{
    constructor(){
        super('Dados Nao Informados')
        this.name = 'DadosNaoInformados'
        this.idError = 3
        this.mensagem = 'Dados não informados';
    }
}

module.exports = DadosNaoInformados