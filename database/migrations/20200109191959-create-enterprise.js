module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Enterprises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      contry: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      creatAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updateAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Empresas');
  }
};