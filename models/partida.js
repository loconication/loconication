'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Partida extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.Partida.belongsTo(models.Juego, {
                foreignkey: 'juegoId',
                as: 'jueguitos'
            });
            models.Partida.belongsTo(models.HojApuestas, {
                foreignkey: 'hojApuestaId',
                as: 'hojapuestitas'
            });
        }
    };
    Partida.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        fecha: DataTypes.DATE,
        hora: DataTypes.TIME,
        duracion: DataTypes.INTEGER,
        equipoA: DataTypes.STRING,
        equipoB: DataTypes.STRING,
        factorA: DataTypes.FLOAT,
        factorB: DataTypes.FLOAT,
        selector: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Partida',
    });
    return Partida;
};