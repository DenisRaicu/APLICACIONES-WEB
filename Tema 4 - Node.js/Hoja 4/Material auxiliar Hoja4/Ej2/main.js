
const DAO = require("./dao");

const daoMensajeria = new DAO("localhost", "root", "", "mensajeria_instantanea");

let usuario = { 
    nombre: "Manuel",
    correo: "montenegro@fdi.ucm.es",
    telefono: "23123123"
};

/*
daoMensajeria.insertarUsuario(usuario, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Elemento insertado correctamente");
        console.log(usuario);
    }
    daoMensajeria.close();
});
*/

/*
daoMensajeria.enviarMensaje({ id: 1 }, { id: 2 }, "Hola!", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Elemento insertado correctamente");
    }
    daoMensajeria.close();
});
*/

/*
daoMensajeria.bandejaEntrada({ id: 2 }, (err, rows) => {
    if (err) {
        console.log(err);
    } else {
        console.log(rows);
    }
    daoMensajeria.close();
});
*/

/*
daoMensajeria.buscarUsuario("i", (err, rows) => {
    console.log(rows);
    daoMensajeria.close();
});
*/
