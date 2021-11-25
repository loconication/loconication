'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class HojApuestas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            HojApuestas.hasMany(models.Partida, {
                foreignKey: 'hojApuestaId',
                as: 'partiditas'
            });
        }
    };
    HojApuestas.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        monto: DataTypes.FLOAT,
        ganancia: DataTypes.FLOAT,
        ganador: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'HojApuestas',
    });
    return HojApuestas;
};