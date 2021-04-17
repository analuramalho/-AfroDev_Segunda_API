class CampoInvalido extends Error{
    constructor(campo){
        const mensagem = `o Campo ${campo} está invalido`
        super(mensagem)
        this.name = 'CampoInvalido'
        this.idError = 1
    }
}

module.exports =  CampoInvalido