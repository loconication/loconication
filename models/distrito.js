'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Distrito extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Distrito.hasMany(models.Cliente, {
                foreignKey: 'distritoId',
                as: 'clientitos'
            });
            models.Distrito.belongsTo(models.Provincia, {
                foreignkey: 'provinciaId',
                as: 'proviancitas'
            });
        }
    };
    Distrito.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Distrito',
    });
    return Distrito;
};