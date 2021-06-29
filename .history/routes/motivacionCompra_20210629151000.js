const express = require('express');
const Multiple = require('../models/Multiple');
const ruta = express.Router();
ruta.get('/',(req,res)=>{
    let resultado = obtenerMotivacionCompra();
    resultado.then(frecuencia =>{
        res.json(frecuencia)
    }).catch(err => {
        res.status(400).json({
            error:err
        })
    })
})

const obtenerMotivacionCompra= async () => {
    try{
        const garantiaDevolucionCambio1 = await Multiple.aggregate([
            {$match:{P10_B_RMC2_Contar_Con_Garantia_Devolucion_Cambio : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const garantiaDevolucionCambio2 = await Multiple.aggregate([
            {$match:{P10_B_RMC2_Contar_Con_Garantia_Devolucion_Cambio : 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const garantiaDevolucionCambio3 = await Multiple.aggregate([
            {$match:{P10_B_RMC2_Contar_Con_Garantia_Devolucion_Cambio : 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const garantiaDevolucionCambioTotal = garantiaDevolucionCambio1[0].count+garantiaDevolucionCambio2[0].count+garantiaDevolucionCambio3[0].count
        
        //CONFIDENCIALIDAD
        const garantiaConfidencialidadInformacion = await Multiple.aggregate([
            {$match:{P10_B_RMC3_Garantia_Confidencialidad_De_Informacion : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const garantiaConfidencialidadInformacion2 = await Multiple.aggregate([
            {$match:{P10_B_RMC3_Garantia_Confidencialidad_De_Informacion : 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const garantiaConfidencialidadInformacion3 = await Multiple.aggregate([
            {$match:{P10_B_RMC3_Garantia_Confidencialidad_De_Informacion : 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const garantiaConfidencialidadInformacionTotal = garantiaConfidencialidadInformacion[0].count+garantiaConfidencialidadInformacion2[0].count+garantiaConfidencialidadInformacion3[0].count;
        //INFORMACIÓN DE COMO COMPRAR
        const informacionComoComprar = await Multiple.aggregate([
            {$match:{P10_B_RMC1_Mas_Informacion_De_Como_Comprar : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const informacionComoComprar2 = await Multiple.aggregate([
            {$match:{P10_B_RMC1_Mas_Informacion_De_Como_Comprar : 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const informacionComoComprar3 = await Multiple.aggregate([
            {$match:{P10_B_RMC1_Mas_Informacion_De_Como_Comprar : 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const informacionComoComprarTotal = informacionComoComprar[0].count+informacionComoComprar2[0].count+informacionComoComprar3[0].count;
        //ATENCIÓN AL CLIENTE DURANTE LA COMPRA
        const atencionClienteDuranteCompra = await Multiple.aggregate([
            {$match:{P10_B_RMC4_Atencion_Al_Cliente_Durante_La_Compra : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const atencionClienteDuranteCompra2 = await Multiple.aggregate([
            {$match:{P10_B_RMC4_Atencion_Al_Cliente_Durante_La_Compra : 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const atencionClienteDuranteCompra3 = await Multiple.aggregate([
            {$match:{P10_B_RMC4_Atencion_Al_Cliente_Durante_La_Compra : 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const atencionClienteDuranteCompraTotal = atencionClienteDuranteCompra[0].count+atencionClienteDuranteCompra2[0].count+atencionClienteDuranteCompra3[0].count
        //ASISTENCIA DURANTE PROCESO
        const asistenciaDuranteProceso = await Multiple.aggregate([
            {$match:{P10_B_RMC5_Asistencia_Durante_El_Proceso : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const asistenciaDuranteProceso2 = await Multiple.aggregate([
            {$match:{P10_B_RMC5_Asistencia_Durante_El_Proceso : 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const asistenciaDuranteProceso3 = await Multiple.aggregate([
            {$match:{P10_B_RMC5_Asistencia_Durante_El_Proceso : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const asistenciaDuranteProcesoTotal = asistenciaDuranteProceso[0].count+asistenciaDuranteProceso2[0].count+asistenciaDuranteProceso3[0].count
        //BAJO COSTO ENVIO
        const bajoCostoEnvio = await Multiple.aggregate([
            {$match:{P10_B_RMC9_Bajos_Costos_De_Envio : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const bajoCostoEnvio2 = await Multiple.aggregate([
            {$match:{P10_B_RMC9_Bajos_Costos_De_Envio : 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const bajoCostoEnvio3 = await Multiple.aggregate([
            {$match:{P10_B_RMC9_Bajos_Costos_De_Envio : 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const bajoCostoEnvioTotal = bajoCostoEnvio[0].count+bajoCostoEnvio2[0].count+bajoCostoEnvio3[0].count
        //PUNTUALIDAD DE ENTREGA
        const puntualidadEntrega = await Multiple.aggregate([
            {$match:{P10_B_RMC8_Puntualidad_De_Entrega : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const puntualidadEntrega2 = await Multiple.aggregate([
            {$match:{P10_B_RMC8_Puntualidad_De_Entrega : 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const puntualidadEntrega3 = await Multiple.aggregate([
            {$match:{P10_B_RMC8_Puntualidad_De_Entrega : 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const puntualidadEntregaTotal = puntualidadEntrega[0].count+puntualidadEntrega2[0].count+puntualidadEntrega3[0].count
        //MAYOR VARIEDAD DE OFERTAS 
        const variedadOfertas = await Multiple.aggregate([
            {$match:{P10_B_RMC8_Puntualidad_De_Entrega : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const variedadOfertas2 = await Multiple.aggregate([
            {$match:{P10_B_RMC8_Puntualidad_De_Entrega : 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const variedadOfertas3 = await Multiple.aggregate([
            {$match:{P10_B_RMC8_Puntualidad_De_Entrega : 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const variedadOfertasTotal = variedadOfertas[0].count+variedadOfertas2[0].count+variedadOfertas3[0].count
        // TUTORIALES
        const tutoriales = await Multiple.aggregate([
            {$match:{P10_B_RMC6_Tutoriales_O_Induccion_Para_Comprar : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const tutoriales2 = await Multiple.aggregate([
            {$match:{P10_B_RMC6_Tutoriales_O_Induccion_Para_Comprar : 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const tutoriales3 = await Multiple.aggregate([
            {$match:{P10_B_RMC6_Tutoriales_O_Induccion_Para_Comprar : 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const tutorialesTotal = tutoriales[0].count+tutoriales2[0].count+tutoriales3[0].count
        //OTRAS 
        const otras = await Multiple.aggregate([
            {$match:{P10_B_RMC10_Otras : 1}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const otras2 = await Multiple.aggregate([
            {$match:{P10_B_RMC10_Otras : 2}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const otras3 = await Multiple.aggregate([
            {$match:{P10_B_RMC10_Otras : 3}},
            {$group : {_id: null, count:{$sum:1}}}
        ])
        const otrasTotal= otras[0].count+otras2[0].count+otras3[0].count 
        
        const compraNoCompraTotal = {
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
        return compraNoCompraTotal

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
