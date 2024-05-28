import { Usuario } from "../models/Usuario.js"
import { Tarefas } from "../models/Tarefas.js"
import { login } from "./autenticacao.js"

const criarUsuario = async (req, res) => {
    const { nome, senha, email } = req.body
    if (nome && senha && email) {
        const usuario = await Usuario.create({ nome, senha, email })
        res.status(201).send({ message: "Usuario cadastrado" })
    } else {
        res.status(400).send({ message: "Favor informar nome, senha, email" })
    }
}

const criartarefa = async (req, res) => {
    const { descricao, id_usuario } = req.body
    if (descricao && id_usuario) {
        const tarefa = await Tarefas.create({ descricao, id_usuario })
        res.status(201).send({ message: "Tarefa cadastrado" })
    } else {
        res.status(400).send({ message: "Favor informar descricao, id_usuario" })
    }
}
const realizarlogin = async (req, res) => {
    const { senha, email } = req.body
    if (senha && email) {
        const login = await login.findOne({ email })
        res.status(201).send({ message: "login realizado" })
    } else {
        res.status(400).send({ message: "Favor informar email e senha" })
    }
}


export {criarUsuario, criartarefa, realizarlogin}