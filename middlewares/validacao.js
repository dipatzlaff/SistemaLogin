import jwt from 'jsonwebtoken'
const segredo = process.env.SECRET

const validarToken = (req, res, next) => {
    try {
        const token = req.headers?.authorization
        const informacaoDoToken = jwt.verify(token, segredo)
        console.log(`Conteúdo do token: ${JSON.stringify(informacaoDoToken)}`)
        req.nivelPermissao = informacaoDoToken
        next()
    } catch (err) {
        console.log(err)
        res.status(500).send({ mensagem: 'Ocorreu um erro'})
    }
}

export { validarToken }