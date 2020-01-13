'use strict';

module.exports = (sequelize, DataTypes) => {
  const Enterprise = sequelize.define('Enterprise', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    contry: DataTypes.STRING,
    type: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at"
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at"
    }
  });

  return Enterprise;
}