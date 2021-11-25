/*
Select con filtro
*/
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

const models = require("../models");
const usr = models.Usuario;

const query1 = async (llave) => {
    console.log("==> Inicio de query1");

    return usr.findAll(
        {
            where : {
                id : llave
            }
        }

    )
        .then( (listado) => {
            // Mostrar los datos
            listado.forEach( elem => {
                jsonObject = elem.get( {raw: true} )
                console.log( jsonObject )
            })
            return listado
        } )

        .catch( (error) => {
            console.log("Error en el acceso a BD")
        })

    console.log("==> Final de query1");
}


// Invocar
module.exports = query1