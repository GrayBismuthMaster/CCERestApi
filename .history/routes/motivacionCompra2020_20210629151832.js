const express = require('express');
const Multiple = require('../models/Datos2020');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    let resultado = obtenerMotivacionCompra2020();
    resultado.then(frecuencia =>{
        res.json(frecuencia)
    }).catch(err => {
        res.status(400).json({
            error:err
        })
    })
})

const obtenerMotivacionCompra2020= async () => {
   
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
