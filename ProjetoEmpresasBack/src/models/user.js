'use strict';

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
        isEmail: {
          msg: "Este campo precisa ser um e-mail"
        },
      },
      lowercase: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      select: false,
      validate: {
        notEmpty: true,
        msg: "Este campo não pode ser vazio"
      }
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

  User.prototype,toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
  }

  return User;
}