const models = require("../models");
const usr = models.Hojapuesta;

const inserta = async(cod, nom, eda) => {
    console.log("==> Inicio de insert")

    return usr.create({
            codigo: cod,
            monto: mont,
            ganancia: gan,
            ganador: gana,
        })
        .then((newUsr) => {
            console.log("Registro Insertado" + newUsr)
        })

    console.log("==> Fin de insert")
}

// Invocar
module.exports = inserta