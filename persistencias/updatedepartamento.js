const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const usr = models.Departamento;

const actualiza = async(cod, nom) => {
    console.log("==> INicio de update")

    return usr.update({
            nombre: nom

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