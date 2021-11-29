const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const usr = models.Administrador;

const actualiza = async(cod, corr, cont) => {
    console.log("==> INicio de update")

    return usr.update({
            correo: corr,
            contrasena: cont
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