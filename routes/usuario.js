import express from 'express'
import { criarUsuario, criartarefa } from '../controllers/usuario.js'
import { login } from '../controllers/autenticacao.js'
import { validarToken } from '../middlewares/validacao.js'
const router = express.Router()

router.post('/cadastro', criarUsuario) 
router.post('/tarefa', criartarefa) 
router.post('/login', login)



export default router
