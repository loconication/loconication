'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Partidas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id: {
                type: Sequelize.INTEGER
            },
            fecha: {
                type: Sequelize.DATE
            },
            hora: {
                type: Sequelize.TIME
            },
            duracion: {
                type: Sequelize.INTEGER
            },
            equipo1: {
                type: Sequelize.STRING
            },
            equipo2: {
                type: Sequelize.STRING
            },
            factor1: {
                type: Sequelize.FLOAT
            },
            factor2: {
                type: Sequelize.FLOAT
            },
            selector: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Partidas');
    }
};