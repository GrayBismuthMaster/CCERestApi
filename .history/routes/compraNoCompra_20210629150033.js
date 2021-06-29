const express = require('express');
const Multiple = require('../models/Multiple');
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
        const sumaCompra = await Multiple.aggregate([
            {$match:{Variable_Clasificacion_Compra_No_Compra : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const sumaNoCompra  = await Multiple.aggregate([
            {$match:{Variable_Clasificacion_Compra_No_Compra : 2}},
            {$group:{_id: null, count:{$sum:1}}}
        ])
         const compraNoCompraTotal = {
                compra: sumaCompra[0].count,
                noCompra: sumaNoCompra[0].count
            }
        return compraNoCompraTotal

    } catch (error) {
        console.log(error)
    }
}

/*
ruta.post('/',(req,res)=>{
    let body = req.body;
    let resultado = agregarPreguntas(body);
    resultado.then(user=>{
        res.json({
            valor:user
        })
    })
})
*/
module.exports = ruta;
