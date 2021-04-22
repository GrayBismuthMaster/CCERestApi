const express = require('express');
const Datos2018 = require('../models/Datos2018');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    let resultado2018 = obtenerFrecuenciaUsoInternet2018();
    resultado2018.then(frecuencia2018 =>{
        res.json(frecuencia2018)
    }).catch(err => {
        res.status(400).json({
            error:err
        })
    })
})

const obtenerFrecuenciaUsoInternet2018 = async () => {
    try {
        const frecuenciaTodosLosDias2018 = await Datos2018.aggregate([
            { $match : { P9_Frec_Int : 1 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaCadaDosDias2018 = await Datos2018.aggregate([
            { $match : { P9_Frec_Int : 2 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaCadaTresDias2018 = await Datos2018.aggregate([
            { $match : { P9_Frec_Int : 3 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaCadaCuatroDias2018 = await Datos2018.aggregate([
            { $match : { P9_Frec_Int : 4 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaCadaCincoDias2018 = await Datos2018.aggregate([
            { $match : { P9_Frec_Int : 5 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        console.log(frecuenciaTodosLosDias2018)
        console.log(frecuenciaCadaDosDias2018)
        /*
        const frecuenciaTotal = { 
            TodosLosDias : frecuenciaTodosLosDias2018[0].count,
            CadaDosDias : frecuenciaCadaDosDias2018[0].count,
            CadaTresDias : frecuenciaCadaTresDias2018[0].count,
            CadaCuatroDias : frecuenciaCadaCuatroDias2018[0].count,
            CadaCincoDias : frecuenciaCadaCincoDias2018[0].count               
        }
        */
        return null
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