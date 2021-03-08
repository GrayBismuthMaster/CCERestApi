const serie = require('./fiboScript')

let argv = process.argv
let valor = argv[2].split('=')[1];

console.log(valor)
serie.crearSerie(cantidad)
 .then(mensaje=>console.log(mensaje))
  .catch(mensaje =>console.log(mensaje))