module.exports = (sequelize, DataTypes) => {
    
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            notEmpty: true,
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isMail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return User;
}