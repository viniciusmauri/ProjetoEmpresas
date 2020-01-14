'use strict';

module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('enterprises', {
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
                type: DataTypes.TEXT,
            },
            enterprise_types: {
                type: DataTypes.ENUM,
                values: ['sports', 'games',
                    'technology', 'clothing', 'beauty',
                    'cheers', 'foods-drinks', 'Pet', 'automobiles',
                    'toy'],
            },
            contry: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            created_at: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updated_at: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        });
    },

    down: (queryInterface, DataTypes) => {
        return queryInterface.dropTable('enterprises');
    }
};