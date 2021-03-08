const serie = require('./fiboScript')
let cantidad = 10;
serie.crearSerie()
    .then(mensaje=>console.log(mensaje))
    .catch(mensaje =>console.log(mensaje))