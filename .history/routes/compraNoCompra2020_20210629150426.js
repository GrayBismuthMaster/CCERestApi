const express = require('express');
const Datos2018 = require('../models/Datos2018');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    let resultado = obtenerCompraNoCompra2018();
    resultado.then(frecuencia =>{
        res.json(frecuencia)
    }).catch(err => {
        res.status(400).json({
            error:err
        })
    })
})

const obtenerCompraNoCompra2018= async () => {
    try{
        const sumaCompra2020 = await Datos2020.aggregate([
            {$match:{"P10_Comprar_productos_servicios" : "5"}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const sumaNoCompra2020  = await Datos2020.aggregate([
            {$match:{"P10_Comprar_productos_servicios" : "3"}},
            {$group:{_id: null, count:{$sum:1}}}
        ])
         const compraNoCompraTotal = {
             
                compra: sumaCompra2020[0].count,
                noCompra: sumaNoCompra2020[0].count
            }
        
        
        return compraNoCompraTotal

    } catch (error) {
        console.log(error)
    }
}

module.exports = ruta;
