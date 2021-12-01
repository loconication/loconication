const models = require("../models");
const usr = models.Cliente;

const inserta = async(cod, nom, eda) => {
    console.log("==> Inicio de insert")

    return usr.create({
            codigo: cod,
            nombre: nom,
            apellidos: ape,
            dni: dni,
            imagenurl: img,
            cooreo: corr,
            contrasena: cont,
            telefono: telf,
            direccion: dir,
            pep: pep,
            estado: est,
        })
        .then((newUsr) => {
            console.log("Registro Insertado" + newUsr)
        })

    console.log("==> Fin de insert")
}

// Invocar
module.exports = inserta