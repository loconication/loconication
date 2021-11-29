const models = require("../models");
const usr = models.Banner;

const inserta = async(cod, nom, eda) => {
    console.log("==> Inicio de insert")

    return usr.create({
            codigo: cod,
            nombre: nom,
            imagenurl: img,
            url: url,
            estado: est,
        })
        .then((newUsr) => {
            console.log("Registro Insertado" + newUsr)
        })

    console.log("==> Fin de insert")
}

// Invocar
module.exports = inserta