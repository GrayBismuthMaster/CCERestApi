obtenerFrecuenciaUsoInternet: async () => {
    try {
        
        const frecuenciaTodosLosDias = await Multiple.aggregate([
            { $match : { P9_Frecuencia_Uso_Internet : 1 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaCadaDosDias = await Multiple.aggregate([
            { $match : { P9_Frecuencia_Uso_Internet : 2 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaCadaTresDias = await Multiple.aggregate([
            { $match : { P9_Frecuencia_Uso_Internet : 3 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaCadaCuatroDias = await Multiple.aggregate([
            { $match : { P9_Frecuencia_Uso_Internet : 4 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaCadaCincoDias = await Multiple.aggregate([
            { $match : { P9_Frecuencia_Uso_Internet : 5 } },
            { $group: { _id: null, count: { $sum: 1 } } }
        ] )
        const frecuenciaTotal = {
            TodosLosDias : frecuenciaTodosLosDias[0].count,
            CadaDosDias : frecuenciaCadaDosDias[0].count,
            CadaTresDias : frecuenciaCadaTresDias[0].count,
            CadaCuatroDias : frecuenciaCadaCuatroDias[0].count,
            CadaCincoDias : frecuenciaCadaCincoDias[0].count                
        }
        return frecuenciaTotal
    } catch (error) {
        console.log(error)
    }
}