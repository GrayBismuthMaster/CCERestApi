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
     const datos = await Datos2018.find({P9_Frec_Int:1})
     return datos;
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