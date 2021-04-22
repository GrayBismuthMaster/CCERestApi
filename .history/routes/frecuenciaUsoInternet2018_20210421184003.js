const express = require('express');
const Datos2018 = require('../models/Datos2018');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    let resultado = obtenerFrecuenciaUsoInternet();
    resultado.then(frecuencia =>{
        res.json(frecuencia)
    }).catch(err => {
        res.status(400).json({
            error:err
        })
    })
})

const obtenerFrecuenciaUsoInternet= async () => {
    try {
        
        const frecuenciaTodosLosDias = await Multiple.aggregate([
            { $match : { P9_Frec_Int : 1 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaCadaDosDias = await Multiple.aggregate([
            { $match : { P9_Frec_Int : 2 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaCadaTresDias = await Multiple.aggregate([
            { $match : { P9_Frec_Int : 3 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaCadaCuatroDias = await Multiple.aggregate([
            { $match : { P9_Frec_Int : 4 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaCadaCincoDias = await Multiple.aggregate([
            { $match : { P9_Frec_Int : 5 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaTotal = {
            TodosLosDias : frecuenciaTodosLosDias[0].count,
            CadaDosDias : frecuenciaCadaDosDias[0].count,
            CadaTresDias : frecuenciaCadaTresDias[0].count,
            CadaCuatroDias : frecuenciaCadaCuatroDias[0].count,
            CadaCincoDias : frecuenciaCadaCincoDias[0].count                
        }
        return frecuenciaTotal
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