const serie = require('./fiboScript')
let argv = process.argv
let cantidad = 10;
serie.crearSerie(cantidad)
    .then(mensaje=>console.log(mensaje))
    .catch(mensaje =>console.log(mensaje))