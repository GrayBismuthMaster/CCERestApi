const express = require('express');
const Multiple = require('../models/Multiple');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    res.json("listo el get de preguntas")
})

ruta.post('/',(req,res)=>{
    let body = req.body;
    let resultado = agregarPreguntas
})