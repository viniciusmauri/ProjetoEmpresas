const sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                msg: "Este campo precisa ser preenchido"
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail:{
                    msg: "Este campo precisa ser um e-mail"
                },
            },
            lowercase:true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            select: false,
            validate:{
                notEmpty: true,
                msg: "Este campo não pode ser vazio"
            }
        },
    });

    User.pre('save', function(next){
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next();
    })

    return User;
}