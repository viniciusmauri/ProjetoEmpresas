module.exports = (sequelize, DataTypes) => {
    const Enterprise = sequelize.define('Enterprise', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        contry: DataTypes.STRING,
        type: DataTypes.STRING,
    });

    return Enterprise;
}