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
    enterpriseTypes: {
      type: DataTypes.ENUM,
      values: ['sports', 'games',
        'technology', 'clothing', 'beauty',
        'cheers', 'foods-drinks', 'Pet', 'automobiles',
        'toy'],
      field: 'enterprise_types'
    },
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