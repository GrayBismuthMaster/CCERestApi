const express = require('express');
const Datos2018 = require('../models/Datos2018');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    let resultado = obtenerMotivoNoCompra2018();
    resultado.then(motivo2018 =>{
        res.json(motivo2018)
    }).catch(err => {
        res.status(400).json({
            error:err
        })
    })
})
const obtenerMotivoNoCompra2018= async() => {
    try {
        const motivoNoCompraPrefieroVer2018 = await Datos2018.aggregate([
            {$match: {"P11A_A1_Prefiero_ver_lo_que_compro": 1}},
            {$group: {_id: null, count:{$sum:1}}}
        ])
        const motivoNoCompraMiedoEntregarInfPer2018 = await Datos2018.aggregate([
            {$match: {"P11A_A2_Miedo_a_entregar_mi_informacion_personal" : 1}},
            {$group: {_id: null, count:{$sum:1}}}
        ])
        const motivoNoCompraDesconfianzaFormaDePago2018 = await Datos2018.aggregate([
            {$match: {"P11A_A3_Desconfianza_en_la_forma_de_pago" : 1}},
            {$group: {_id: null, count:{$sum:1}}}
        ])
        const motivoNoCompraMiedoSerEstafadoEnganiado2018 = await Datos2018.aggregate([
            {$match: {"P11A_A4_Miedo_a_ser_estafado_enganiado" : 1}},
            {$group: {_id: null, count:{$sum:1}}}
        ])
        const motivoTotal = {
            PrefieroVerLoQueCompro : motivoNoCompraPrefieroVer2018[0].count,
            MiedoEntregarInfPer: motivoNoCompraMiedoEntregarInfPer2018[0].count,
            DesconfianzaFormaDePago: motivoNoCompraDesconfianzaFormaDePago2018[0].count,
            MiedoSerEstafadoEnganiado: motivoNoCompraMiedoSerEstafadoEnganiado2018[0].count
        }
        return motivoTotal

    } catch (error) {
        console.log(error)
    }
}
module.exports = ruta;