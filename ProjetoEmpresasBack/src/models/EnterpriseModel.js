const { Model, DataTypes } = require('sequelize');

class Enterprise extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            contry: DataTypes.TEXT,
            type: DataTypes.STRING,
        }, {
            sequelize
        })
    }
};
module.exports = Enterprise;