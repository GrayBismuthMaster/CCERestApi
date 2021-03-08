const serie = require('./fiboScript')
let cantidad = 
serie.crearSerie()
    .then(mensaje=>console.log(mensaje))
    .catch(mensaje =>console.log(mensaje))