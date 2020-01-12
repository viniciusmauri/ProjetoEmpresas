const Sequelize = require('sequelize');
const dbConfig = require('../config/db');
const EnterPriseModel = require('../models/EnterpriseModel');
const UserModel = require('../models/UserModel');

const connection = new Sequelize(dbConfig);

EnterPriseModel.init(connection);
UserModel.init(connection);

module.exports = connection;