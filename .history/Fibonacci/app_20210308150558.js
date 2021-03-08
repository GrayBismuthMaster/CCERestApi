const serie = require('./fiboScript')

serie.crearSerie()
    .then(mensaje=>console.log(mensaje))
    .catch(mensaje =>console.log(mensaje))