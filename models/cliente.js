'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cliente extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.Cliente.belongsTo(models.Distrito, {
                foreignkey: 'distritoId',
                as: 'distrititos'
            });
        }
    };
    Cliente.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombres: DataTypes.STRING,
        apellidos: DataTypes.STRING,
        dni: DataTypes.STRING,
        imagen_url: DataTypes.STRING,
        correo: DataTypes.STRING,
        contrasena: DataTypes.STRING,
        telefono: DataTypes.STRING,
        direccion: DataTypes.STRING,
        pep: DataTypes.BOOLEAN,
        estado: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Cliente',
    });
    return Cliente;
};