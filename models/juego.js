'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Juego extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Juego.hasMany(models.CategoriaJuego, {
                foreignKey: 'categoriaJuegoId',
                as: 'categoriajueguitos'
            });
            Juego.hasMany(models.Partida, {
                foreignKey: 'juegoId',
                as: 'partiditas'
            });
        }
    };
    Juego.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Juego',
    });
    return Juego;
};