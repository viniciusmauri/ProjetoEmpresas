module.exports = (sequelize, DataTypes) => {
    const post = sequelize.define("Post", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Este campo não pode ser vazio"
                }
            }
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validade: {
                notEmpty: {
                    msg: "Este campo não pode ser vazio"
                }
            }
        },

        contry: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Este campo precisa ser preenchido"
                }
            }
        },

        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Este campo deve ser preenchido"
                }
            }
        }
    }
)};