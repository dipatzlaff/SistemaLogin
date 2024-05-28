import { Sequelize } from 'sequelize'

const banco = process.env.BANCO_DE_DADOS
const sequelize = new Sequelize(banco)

export default sequelize
