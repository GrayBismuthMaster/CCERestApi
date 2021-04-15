const express = require('express');
const Multiple = require('../models/Multiple');
const ruta = express.Router();
ruta.get('/',(req,res)=>{

})
const listarPreguntas = async ()=>{
    let preguntas = await Multiple.find({'estado':true})
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