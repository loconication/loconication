const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const usr = models.Usuario;

const actualiza = async (cod, nom, eda) => {
    console.log("==> INicio de update")

    return usr.update(
        {
            nombre : nom,
            edad : eda
        },
        {
            where : {
                codigo : cod
            }
        }
    )
    .then( (resultado) => {
        console.log("Registro actualizado")
        console.log(resultado)
    })

    console.log("==> Fin de update")
}
 
module.exports = actualiza