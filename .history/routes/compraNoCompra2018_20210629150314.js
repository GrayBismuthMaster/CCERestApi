const express = require('express');
const Datos2018 = require('../models/Datos2018');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    let resultado = obtenerCompraNoCompra();
    resultado.then(frecuencia =>{
        res.json(frecuencia)
    }).catch(err => {
        res.status(400).json({
            error:err
        })
    })
})

const obtenerCompraNoCompra= async () => {
    try{
        const sumaCompra2018 = await Datos2018.aggregate([
            {$match:{"P10G_Comprar" : 5}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const sumaNoCompra2018  = await Datos2018.aggregate([
            {$match:{"P10G_Comprar" : 3}},
            {$group:{_id: null, count:{$sum:1}}}
        ])
         const compraNoCompraTotal = {
             
                compra: sumaCompra2018[0].count,
                noCompra: sumaNoCompra2018[0].count
            }
        
        
        return compraNoCompraTotal

    } catch (error) {
        console.log(error)
    }
}

module.exports = ruta;
