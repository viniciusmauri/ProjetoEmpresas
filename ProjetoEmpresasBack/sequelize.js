const sequelize = require('sequelize');
const UserModel = require('./src/models/UserModel');
const EnterpriseModel = require('./src/models/EnterpriseModel');

const sequelize = new Sequelize('empresas', 'root', '210818',{
    host:'localhost',
    dialect: 'mysql',
    pool: {
        max:10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const User = UserModel(sequelize, Sequelize)

const Enterprise = EnterpriseModel(sequelize, Sequelize)

sequelize.sync({ force: true}).then(() => {
    console.log(`Database and tables created!`)
})

module.exports = {
    User,
    Enterprise
}