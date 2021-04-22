const express = require('express');
const Datos2020 = require('../models/Datos2020');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    let resultado2020 = obtenerFrecuenciaUsoInternet2020();
    resultado2018.then(frecuencia2020 =>{
        res.json(frecuencia2018)
    }).catch(err => {
        res.status(400).json({
            error:err
        })
    })
})

const obtenerFrecuenciaUsoInternet2018 = async () => {
    try {const frecuenciaTodosLosDias2018 = await Datos2018.aggregate([
        { $match : { "P9_Frecuencia_Uso_Internet": "1" } },
        { $group: { _id: null, count: { $sum: 1 } } }
    ] )
    const frecuenciaCadaDosDias2018 = await Datos2018.aggregate([
        { $match : { "P9_Frecuencia_Uso_Internet": "2"} },
        { $group: { _id: null, count: { $sum: 1 } } }
    ] )
    const frecuenciaCadaTresDias2018 = await Datos2018.aggregate([
        { $match : { "P9_Frecuencia_Uso_Internet": "3" } },
        { $group: { _id: null, count: { $sum: 1 } } }
    ] )
    const frecuenciaCadaCuatroDias2018 = await Datos2018.aggregate([
        { $match : { "P9_Frecuencia_Uso_Internet": "4" } },
        { $group: { _id: null, count: { $sum: 1 } } }
    ] )
    const frecuenciaCadaCincoDias2018 = await Datos2018.aggregate([
        { $match : { "P9_Frecuencia_Uso_Internet": "5"} },
        { $group: { _id: null, count: { $sum: 1 } } }
    ] )
    
    const frecuenciaTotal = { 
        TodosLosDias : frecuenciaTodosLosDias2018[0].count,
        CadaDosDias : frecuenciaCadaDosDias2018[0].count,
        CadaTresDias : frecuenciaCadaTresDias2018[0].count,
        CadaCuatroDias : frecuenciaCadaCuatroDias2018[0].count,
        CadaCincoDias : frecuenciaCadaCincoDias2018[0].count               
    }
    
    return frecuenciaTotal  
    } catch (error) {
        console.log(error)
    }
}

module.exports = ruta;