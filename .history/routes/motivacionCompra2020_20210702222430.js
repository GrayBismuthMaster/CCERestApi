const express = require('express');
const Datos2020 = require('../models/Datos2020');
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
    try{
        //INFORMACIÓN DE COMO COMPRAR
        const tenerInformacionGuiaTutorialesCompra2020 = await Datos2020.aggregate([
         {$match:{"P11_2_1_Tener_Informacion_guia_tutoriales_de_compra" : "1"}},
         {$group : {_id: null, count:{$sum:1}}}
     ])
     //GARANTÍA DE ENTREGA Y PAGO
     const tenerGarantiasEntregaPago2020 = await Datos2020.aggregate([
         {$match:{"P11_2_2_Tener_garantias_en_entrega_y_en_el_pago" : "1"}},
         {$group : {_id: null, count:{$sum:1}}}
     ])
     //ATENCIÓN AL CLIENTE DURANTE LA COMPRA
     const tenerAsistenciaAtencion2020 = await Datos2020.aggregate([
         {$match:{"P11_2_3_Tener_asistencia_y_atencion": "1"}},
         {$group : {_id: null, count:{$sum:1}}}
     ])
      //FACILIDAD DE PAGO

        const facilidadPago2020 = await Datos2020.aggregate([
         {$match:{"P11_2_4_Facilidad_de_pago": "1"}},
         {$group : {_id: null, count:{$sum:1}}}
     ])
      //FORMAS DE PAGO

    const formasPago2020 = await Datos2020.aggregate([
     {$match:{"P11_2_5_Variedad_de_formas_de_pago": "1"}},
     {$group : {_id: null, count:{$sum:1}}}
     ])
     // TUTORIALES
      const tutorialesInduccionParaRealizarCompra2020 = await Datos2020.aggregate([
         {$match:{"P11_2_6_Tutoriales_o_induccion_para_realizar_la_compra": "1"}},
         {$group : {_id: null, count:{$sum:1}}}
     ])
     //MAYOR VARIEDAD DE OFERTAS 
    const variedadOferta2020 = await Datos2020.aggregate([
     {$match:{"P11_2_7_Tener_variedad_de_la_oferta": "1"}},
     {$group : {_id: null, count:{$sum:1}}}
     ])
    //MEJOR PRECIO
     const mejorPrecio2020 = await Datos2020.aggregate([
         {$match:{"P11_2_8_Mejor_precio": "1"}},
         {$group : {_id: null, count:{$sum:1}}}
     ])
     //OTRAS 
     const otras2020 = await Datos2020.aggregate([
         {$match:{"P11_2_9_Otras": "1"}},
         {$group : {_id: null, count:{$sum:1}}}
     ])
     
     const motivacionCompraTotal = {
         tenerInformacionGuiaTutorialesCompra : tenerInformacionGuiaTutorialesCompra2020[0].count,
         tenerGarantiasEntregaPago : tenerGarantiasEntregaPago2020[0].count,
         tenerAsistenciaAtencion : tenerAsistenciaAtencion2020[0].count,
         facilidadPago : facilidadPago2020[0].count,
         formasPago : formasPago2020[0].count,
         tutorialesInduccionParaRealizarCompra : tutorialesInduccionParaRealizarCompra2020[0].count,
         variedadOferta : variedadOferta2020[0].count,
         mejorPrecio : mejorPrecio2020[0].count,
         otras : otras2020[0].count
     }
     return motivacionCompraTotal

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
