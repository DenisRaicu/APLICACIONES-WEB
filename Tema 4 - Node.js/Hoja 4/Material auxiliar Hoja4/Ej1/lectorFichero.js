"use strict";

const fs = require("fs");

/**
 * Clase para leer números de un fichero de texto.
 */
class Lector {
    /**
     * Crea un nuevo lector asociado al fichero cuyo nombre se pasa como
     * parámetro.
     * 
     * Se tiene acceso a los distintos números mediante el método siguienteEntero.
     * 
     * @param {string} nombreFichero
     */
    constructor(nombreFichero) {
        this.nombreFichero = nombreFichero;
        this.lista = null;
    }
    
    /**
     * Lee el siguiente número del fichero, y pasa su resultado a la función
     * callback.
     * 
     * @param {function} callback Función callback que recibirá el siguiente número o,
     * en su caso, un objeto error. La función callback recibe el objeto Error
     * como primer parámetro y el número leído como segundo. Si ya no hay más
     * números por leer, se pasa null como segundo parámetro.
     */
    siguienteEntero(callback) {
        if (!this.lista) {
            fs.readFile(this.nombreFichero, { encoding: "utf-8" },
                (err, contenido) => {
                    if (err) {
                        callback(err);
                    } else {
                        this.lista = contenido.replace(/\s+/, " ").split(" ").map(s => Number(s));
                        this.siguienteEntero(callback);
                    }
                });
        } else {
            process.nextTick(() => {
                if (this.lista.length === 0) {
                    callback(null, null);
                } else {
                    var elem = this.lista.shift();
                    callback(null, elem);
                }
            });
        }
        
    }
}


module.exports = Lector;