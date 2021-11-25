'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CategoriaJuego extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.CategoriaJuego.belongsTo(models.Juego, {
                foreignkey: 'categoriaJuegoId',
                as: 'jueguitos'
            });
        }
    };
    CategoriaJuego.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'CategoriaJuego',
    });
    return CategoriaJuego;
};