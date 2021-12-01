const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const usr = models.Hojapuestas;

const actualiza = async(cod, mont, gan, gana) => {
    console.log("==> INicio de update")

    return usr.update({
            monto: mont,
            ganancia: gan,
            ganador: gana
        }, {
            where: {
                codigo: cod
            }
        })
        .then((resultado) => {
            console.log("Registro actualizado")
            console.log(resultado)
        })

    console.log("==> Fin de update")
}

module.exports = actualiza