const serie = require('./fiboScript')

let argv = process.argv
let valor = argv[2].split('=');

console.log(valor)
//let cantidad = 10;
//serie.crearSerie(cantidad)
//  .then(mensaje=>console.log(mensaje))
//  .catch(mensaje =>console.log(mensaje))