
const mysql = require("mysql");

class DAO {
    constructor(host, user, password, database) {
      /* ... */
    }

    insertarUsuario(usuario, callback) {
      /* ... */
    }

    enviarMensaje(usuarioOrigen, usuarioDestino, mensaje, callback) {
      /* ... */
    }

    bandejaEntrada(usuario, callback) {
      /* ... */
    }

    buscarUsuario(str, callback) {
      /* ... */
    }

    close() {
      /* Cierra el pool de conexiones */
      /* ... */
    }

}

module.exports = DAO;