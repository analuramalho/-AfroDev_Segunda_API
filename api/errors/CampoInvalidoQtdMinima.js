class CampoInvalidoQtdMinima extends Error{
    constructor(campo){
        const mensagem = `o campo ${campo} tem que ter no minimo 8 caracteres`
        super(mensagem)
        this.name = 'CampoQtdMinima'
        this.idError = 2
    }
}

module.exports = new CampoInvalidoQtdMinima