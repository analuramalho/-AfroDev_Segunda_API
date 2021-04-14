class CampoQtdMaxima extends Error {
    constructor(campo){
        const mensagem = `o campo ${campo} ultrapassou o limite de 64 caracteres`
        super(mensagem)
        this.name = 'CampoQtdMaxima'
        this.idError = 5
    }
}

module.exports = new CampoQtdMaxima