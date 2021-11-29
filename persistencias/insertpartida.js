const models = require("../models");
const usr = models.Partida;

const inserta = async(cod, nom, eda) => {
    console.log("==> Inicio de insert")

    return usr.create({
            codigo: cod,
            fecha: fec,
            hora: hora,
            duracion: dur,
            equipo1: equ1,
            equipo2: equ2,
            factor1: fac1,
            factor2: fac2,
            selector: selec,

        })
        .then((newUsr) => {
            console.log("Registro Insertado" + newUsr)
        })

    console.log("==> Fin de insert")
}

// Invocar
module.exports = inserta