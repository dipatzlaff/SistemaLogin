import sequelize from '../database.js'
import { DataTypes } from 'sequelize'

const Tarefas = sequelize.define('Tarefas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.INTEGER,
        
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        
    },
    
})
export { Tarefas }