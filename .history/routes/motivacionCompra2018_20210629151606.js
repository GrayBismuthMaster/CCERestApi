const express = require('express');
const Multiple = require('../models/D');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    let resultado = obtenerMotivacionCompra2018();
    resultado.then(frecuencia =>{
        res.json(frecuencia)
    }).catch(err => {
        res.status(400).json({
            error:err
        })
    })
})

const obtenerMotivacionCompra2018= async () => {
    try{
        const garantiaDevolucionCambio12018 = await Datos2018.aggregate([
            {$match:{"P11B_B2_Contar_con_garantia_de_devolucion_o_cambio" : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const garantiaDevolucionCambio22018 = await Datos2018.aggregate([
            {$match:{"P11B_B2_Contar_con_garantia_de_devolucion_o_cambio"  : 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const garantiaDevolucionCambio32018 = await Datos2018.aggregate([
            {$match:{"P11B_B2_Contar_con_garantia_de_devolucion_o_cambio" : 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const garantiaDevolucionCambioTotal = garantiaDevolucionCambio12018[0].count+garantiaDevolucionCambio22018[0].count+garantiaDevolucionCambio32018[0].count
        
        //CONFIDENCIALIDAD
        const garantiaConfidencialidadInformacion2018 = await Datos2018.aggregate([
            {$match:{"P11B_B3_Si_garantizan_confidencialidad_en_la_informacion_suministrada" : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const garantiaConfidencialidadInformacion22018 = await Datos2018.aggregate([
            {$match:{"P11B_B3_Si_garantizan_confidencialidad_en_la_informacion_suministrada" : 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const garantiaConfidencialidadInformacion32018 = await Datos2018.aggregate([
            {$match:{"P11B_B3_Si_garantizan_confidencialidad_en_la_informacion_suministrada": 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const garantiaConfidencialidadInformacionTotal = garantiaConfidencialidadInformacion2018[0].count+garantiaConfidencialidadInformacion22018[0].count+garantiaConfidencialidadInformacion32018[0].count;
        //INFORMACIÓN DE COMO COMPRAR
        const informacionComoComprar2018 = await Datos2018.aggregate([
            {$match:{"P11B_B1_Mas_informacion_de_como_realizar_las_compras" : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const informacionComoComprar22018 = await Datos2018.aggregate([
            {$match:{"P11B_B1_Mas_informacion_de_como_realizar_las_compras": 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const informacionComoComprar32018 = await Datos2018.aggregate([
            {$match:{"P11B_B1_Mas_informacion_de_como_realizar_las_compras": 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const informacionComoComprarTotal = informacionComoComprar2018[0].count+informacionComoComprar22018[0].count+informacionComoComprar32018[0].count;
        //ATENCIÓN AL CLIENTE DURANTE LA COMPRA
        const atencionClienteDuranteCompra2018 = await Datos2018.aggregate([
            {$match:{"P11B_B4_Atencion_al_cliente_en_caso_de_errores_en_el_proceso_de_compra": 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const atencionClienteDuranteCompra22018 = await Datos2018.aggregate([
            {$match:{"P11B_B4_Atencion_al_cliente_en_caso_de_errores_en_el_proceso_de_compra": 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const atencionClienteDuranteCompra32018 = await Datos2018.aggregate([
            {$match:{"P11B_B4_Atencion_al_cliente_en_caso_de_errores_en_el_proceso_de_compra": 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const atencionClienteDuranteCompraTotal = atencionClienteDuranteCompra2018[0].count+atencionClienteDuranteCompra22018[0].count+atencionClienteDuranteCompra32018[0].count
        //ASISTENCIA DURANTE PROCESO
        const asistenciaDuranteProceso2018 = await Datos2018.aggregate([
            {$match:{"P11B_B5_Asistencia_durante_el_proceso_de_compra": 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const asistenciaDuranteProceso22018 = await Datos2018.aggregate([
            {$match:{"P11B_B5_Asistencia_durante_el_proceso_de_compra": 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const asistenciaDuranteProceso32018 = await Datos2018.aggregate([
            {$match:{"P11B_B5_Asistencia_durante_el_proceso_de_compra" : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const asistenciaDuranteProcesoTotal = asistenciaDuranteProceso2018[0].count+asistenciaDuranteProceso22018[0].count+asistenciaDuranteProceso32018[0].count
        //BAJO COSTO ENVIO
        const bajoCostoEnvio2018 = await Datos2018.aggregate([
            {$match:{"P11B_B9_Bajos_costos_del_envio": 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const bajoCostoEnvio22018 = await Datos2018.aggregate([
            {$match:{"P11B_B9_Bajos_costos_del_envio": 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const bajoCostoEnvio32018 = await Datos2018.aggregate([
            {$match:{"P11B_B9_Bajos_costos_del_envio": 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const bajoCostoEnvioTotal = bajoCostoEnvio2018[0].count+bajoCostoEnvio22018[0].count+bajoCostoEnvio32018[0].count
        //PUNTUALIDAD DE ENTREGA
        const puntualidadEntrega2018 = await Datos2018.aggregate([
            {$match:{"P11B_B8_Puntualidad_en_la_entrega": 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const puntualidadEntrega22018 = await Datos2018.aggregate([
            {$match:{"P11B_B8_Puntualidad_en_la_entrega": 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const puntualidadEntrega32018 = await Datos2018.aggregate([
            {$match:{"P11B_B8_Puntualidad_en_la_entrega": 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const puntualidadEntregaTotal = puntualidadEntrega2018[0].count+puntualidadEntrega22018[0].count+puntualidadEntrega32018[0].count
        //MAYOR VARIEDAD DE OFERTAS 
        const variedadOfertas2018 = await Datos2018.aggregate([
            {$match:{"P11B_B7_Mayor_variedad_de_la_oferta": 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const variedadOfertas22018 = await Datos2018.aggregate([
            {$match:{"P11B_B7_Mayor_variedad_de_la_oferta" : 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const variedadOfertas32018 = await Datos2018.aggregate([
            {$match:{"P11B_B7_Mayor_variedad_de_la_oferta": 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const variedadOfertasTotal = variedadOfertas2018[0].count+variedadOfertas22018[0].count+variedadOfertas32018[0].count
        // TUTORIALES
        const tutoriales2018 = await Datos2018.aggregate([
            {$match:{"P11B_B6_Tutoriales_o_induccion_para_realizar_la_compra": 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const tutoriales22018 = await Datos2018.aggregate([
            {$match:{"P11B_B6_Tutoriales_o_induccion_para_realizar_la_compra": 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const tutoriales32018 = await Datos2018.aggregate([
            {$match:{"P11B_B6_Tutoriales_o_induccion_para_realizar_la_compra": 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const tutorialesTotal = tutoriales2018[0].count+tutoriales22018[0].count+tutoriales32018[0].count
        //OTRAS 
        const otras2018 = await Datos2018.aggregate([
            {$match:{"P11_B10_Otra": 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const otras22018 = await Datos2018.aggregate([
            {$match:{"P11_B10_Otra": 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const otras32018 = await Datos2018.aggregate([
            {$match:{"P11_B10_Otra": 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const otrasTotal= otras2018[0].count+otras22018[0].count+otras32018[0].count 
        
        const motivacionCompraTotal = {
            garantiaDevolucionCambio: garantiaDevolucionCambioTotal,
            garantiaConfidencialidadInformacion: garantiaConfidencialidadInformacionTotal,
            informacionComoComprar : informacionComoComprarTotal,
            atencionClienteDuranteCompra : atencionClienteDuranteCompraTotal,
            asistenciaDuranteProceso : asistenciaDuranteProcesoTotal,
            bajoCostoEnvio : bajoCostoEnvioTotal,
            puntualidadEntrega : puntualidadEntregaTotal,
            variedadOfertas : variedadOfertasTotal,
            tutoriales : tutorialesTotal,
            otras : otrasTotal
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
