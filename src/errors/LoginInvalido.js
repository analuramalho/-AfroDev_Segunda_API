class LoginInvalido extends Error {
    constructor(){
        super('email ou senha invalidos')
        this.name = 'Login Invalido'
        this.idError=7
    }
}
module.exports = LoginInvalido