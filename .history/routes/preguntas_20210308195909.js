const express = require('express');
const Multiple = require('../models/Multiple');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    let resultado = listarPreguntas();
    resultado.then(usuarios)
})
const listarPreguntas = async ()=>{
    let preguntas = await Multiple.find({});
    return preguntas;
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