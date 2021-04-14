class FormatoInvalido extends Error {
    constructor(contentType){
        const mensagem = `o tipo ${contentType} é invalido! API aceita somente JSON`
        super(mensagem)
        this.name = 'FormatoInvalido'
        this.idError = 6
    }
}

module.exports = new FormatoInvalido