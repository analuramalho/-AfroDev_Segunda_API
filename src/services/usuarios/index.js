const TabelaUsuario = require('../../models/usuarios/TabelaUsuario')
const Usuario = require('../../services/usuarios/Usuario')
const SerializadorUsuario = require('../../shared/Serializar').SerializarUsuario


module.exports = {
        listarUsuarios:async(req,res,next)=>{
            try {
                const results = await TabelaUsuario.listar()
                const serializador=new SerializadorUsuario(
                    res.getHeader('Content-type')
                )
                res.status(200).send(serializador.transformar(results))
            } catch (error) {
                next(error)
            }
            
        },
        criarUsuarios:async(req,res,next)=>{
            try {
                const reqUsuario = req.body
                const usuario  = new Usuario(reqUsuario)
                await usuario.criar()
                const serializador = new SerializadorUsuario(
                    res.getHeader('Content-Type')
                )
                res.status(201).send(serializador.transformar(usuario))
            } catch (error) {
                next(error)
            }
        },
        listarUsuario:async(req,res,next)=>{
            try {
                const id = req.params.idUsuario
                const usuario = new Usuario({id:id})
        
                await usuario.buscarPorId()
                const serializador=new SerializadorUsuario(
                    res.getHeader('Content-type')
                )
                res.status(200).send(serializador.transformar(usuario))
            } catch (error) {
                next(error)
            }
        },
        alterarUsuario:async(req,res,next)=>{
            try {
                const id = req.params.idUsuario
                const dadosBody = req.body
                const dados = Object.assign({},dadosBody,{id:id})
                const usuario=new Usuario(dados)
                await usuario.atualizar()
                const serializador=new SerializadorUsuario(
                    res.getHeader('Content-type')
                )
                res.status(204).send(serializador.transformar(usuario))
            } catch (error) {
                next(error)
            }
        },
        removerUsuario: async(req,res,next)=>{
            try {
                const id = req.params.idUsuario
                const usuario = new Usuario({id:id})
                await usuario.remover()
                res.status(204).send()
            } catch (error) {
                next(error)
            }
        }

}