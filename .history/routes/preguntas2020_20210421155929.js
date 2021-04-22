const express = require('express');
const Datos2020 = require('../models/Datos2020')
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    let resultado = listarPreguntas2020();
    resultado.then(preguntas2020 =>{
        res.json(preguntas2020)
    }).catch(err => {
        res.status(400).json({
            error:err
        })
    })
})


const listarPreguntas2020 = async() => {
    let preguntas2020 = await Datos2018.find({});
    return preguntas2020;
}

module.exports = ruta;