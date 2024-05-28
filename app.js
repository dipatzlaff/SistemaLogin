import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import usuarioRouter from './routes/usuario.js'
import sequelize from './database.js'

const app = express()

app.use(express.json())
const origens = ['http://localhost:5173/']

app.use(cors({ origin: origens}))
app.use('/usuario', usuarioRouter)

try {
    await sequelize.sync()
    console.log('Conectado com sucesso')
} catch (error) {
    console.error('Erro ao conectar', error)
}

app.listen(3001, () => console.log('servidor rodando'))
