class NaoEncontrado extends Error{
    constructor(){
        super('Dados Nao Encontrados')
        this.name = 'NaoEncontrado'
        this.idError = 4
    }
}

module.exports = new NaoEncontrado