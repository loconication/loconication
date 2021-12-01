const models = require("../models");
const usr = models.Partida;

const inserta = async(cod, nom, eda) => {
    console.log("==> Inicio de insert")

    return usr.create({
            codigo: cod,
            fecha: fec,
            hora: hora,
            duracion: dur,
            equipoA: equA,
            equipoB: equB,
            factorA: facA,
            factorB: facB,
            selector: selec,

        })
        .then((newUsr) => {
            console.log("Registro Insertado" + newUsr)
        })

    console.log("==> Fin de insert")
}

// Invocar
module.exports = inserta