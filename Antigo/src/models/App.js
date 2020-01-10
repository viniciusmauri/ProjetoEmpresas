module.exports = (sequelize, DataTypes) => {
    const Enterprise = sequelize.define('Enterprise', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        contry: DataTypes.STRING,
        type: DataTypes.STRING,
    });

    return Enterprise;
}

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    return User;
}