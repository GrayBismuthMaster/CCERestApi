const express = require('express');
const Datos2020 = require('../models/Datos2020')
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    let resultado = listarPreguntas2020();
    resultado.then(preguntas =>{
        res.json(preguntas)
    }).catch(err => {
        res.status(400).json({
            error:err
        })
    })
})


const listarPreguntas2018 = async() => {
    let preguntas2018 = await Datos2018.find({});
    return preguntas2018;
}

module.exports = ruta;