import jwt from 'jsonwebtoken'
const segredo = process.env.SECRET

const login = (req, res) => {
    const { usuario, senha } = req.body
    // Depois vamos buscar do banco de dados e validar a senha
    if (usuario == 'ruan' && senha == 123) {
        // Informação que o token vai transportar
        const permissao = { tipo: "admin" }
        // Gerar o token
        const token = jwt.sign(permissao, segredo, { expiresIn: "1d" }) 
        res.status(200).send({ mensagem: 'Logado com sucesso', token })
    } else {
        res.status(500).send({ mensagem: 'Credenciais inválidas'})
    }
}

export { login }