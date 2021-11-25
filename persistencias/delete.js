const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const usr = models.Usuario;

const elimina = async (llave) => {
    console.log("==> INicio de delete")

    return usr.destroy(
        {
            where : {
                id : llave
            }
        }
    )
    .then( (resultado) => {
        console.log("Registro eliminado")
        console.log(resultado)
        return resultado
    })

    console.log("==> Fin de delete")
}

module.exports = elimina