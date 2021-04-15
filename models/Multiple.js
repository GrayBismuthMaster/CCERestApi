const mongoose = require('mongoose');
const MultipleSchema = mongoose.Schema({
    Fecha: {
        type:Date
    },
    P1_Pais: {
        type:Number
    },
    P2_Edad: {
        type:Number
    },
    P2_1_Edad_Rangos: {
        type:Number
    },
    P3_Genero: {
        type:Number
    },
    P4_Nivel_Educativo: {
        type:Number
    },
    P5_Ocupacion: {
        type:Number
    },
    P5_Ocupacion_Otros: {
        type:String
    },
    P6_Ingreso: {
        type:Number
    },
    P7_Estrato: {
        type:Number
    },
    Nivel_Socio_Economico_Sumado: {
        type:Number
    },
    Nivel_Socio_Economico_Total_Rangos: {
        type:Number
    },
    P8_Zona_De_Residencia: {
        type:Number
    },
    Variable_Clasificacion_Compra_No_Compra: {
        type:Number
    },
    P9_Frecuencia_Uso_Internet: {
        type:Number
    },
    P10_Revisar_Enviar_Correos: {
        type:Number
    },
    P10_Leer_Noticias: {
        type:Number
    },
    P10_Buscar_Informacion_Direcciones: {
        type:Number
    },
    P10_Entretenimiento: {
        type:Number
    },
    P10_Transacciones_Bancarias: {
        type:Number
    },
    P10_Informacion_Productos: {
        type:Number
    },
    P10_Comprar_Productos_Servicios: {
        type:Number
    },
    P10_A_Prefiero_Ver_Lo_Que_Compro: {
        type:Number
    },
    P10_A_Miedo_Entregar_Informacion_Personal: {
        type:Number
    },
    P10_A_Desconfianza_En_Forma_De_Pago: {
        type:Number
    },
    P10_A_Miedo_Ser_Estafado_Enganiado: {
        type:Number
    },
    P10_A_Desconfio_Informacion_De_Vendedores: {
        type:Number
    },
    P10_A_Desconocimiento_Falta_De_Informacion: {
        type:Number
    },
    P10_A_Prefiero_Hablar_Con_Vendedor: {
        type:Number
    },
    P10_A_Dificultad_Para_Recibir_Pedido: {
        type:Number
    },
    P10_A_Costo_De_Envio: {
        type:Number
    },
    P10_A_Lo_He_Intentado_Sin_Exito: {
        type:Number
    },
    P10_A_Malas_Referencias: {
        type:Number
    },
    P10_A_Otras_Razones: { type:Number } , 
    P10_A_Otra_Razon_Posible_Para_No_Comprar: { type:Number } , 
    P10_A_Total_Prefiero_Ver_Lo_Que_Compro: { type:Number } , 
    P10_A_Total_Miedo_Entregar_Informacion_Personal: { type:Number } , 
    P10_A_Total_Desconfianza_Forma_De_Pago: { type:Number } ,
    P10_A_Total_Miedo_Ser_Estafado_Enganiado: { type:Number } ,
    P10_B_RMC1_Mas_Informacion_De_Como_Comprar: { type:Number } ,
    P10_B_RMC2_Contar_Con_Garantia_Devolucion_Cambio: { type:Number } ,
    P10_B_RMC3_Garantia_Confidencialidad_De_Informacion: { type:Number } , 
    P10_B_RMC4_Atencion_Al_Cliente_Durante_La_Compra: { type:Number } , 
    P10_B_RMC5_Asistencia_Durante_El_Proceso: { type:Number } , 
    P10_B_RMC6_Tutoriales_O_Induccion_Para_Comprar: { type:Number } ,
    P10_B_RMC7_Mayor_Variedad_De_Ofertas: { type:Number } , 
    P10_B_RMC8_Puntualidad_De_Entrega: { type:Number } , 
    P10_B_RMC9_Bajos_Costos_De_Envio: { type:Number } , 
    P10_B_RMC10_Otras: { type:Number } , 
    P10_B_Otra_Razon_Posible_Para_Comprar: { type:Number } , 
    P10_B_TotalRMC1_Mas_Informacion_De_Como_Comprar: { type:String } , 
    P10_B_TotalRMC2_Contar_Con_Garantia_Devolucion_Cambio: { type:String} ,
    P10_B_TotalRMC3_Garantia_Confidencialidad_De_Informacion: { type:String } , 
    P10_B_TotalRMC4_Atencion_Al_Cliente_Durante_La_Compra: { type:String } , 
    P12_A_Frecuencia_Compra_Productos_Tiendas_Ecuatorianas: { type:Number } , 
    P12_B_Frecuencia_Compra_Productos_Tiendas_Internacionales: { type:Number } , 
    P12_C_Frecuencia_Compra_Servicios_Tiendas_Ecuatorianas: { type:Number } ,
    P12_D_Frecuencia_Compra_Servicios_Tiendas_Internacionales: { type:Number } , 
    P13_Referencias_Amigos_Conocidos_Familiares: { type:Number } , 
    P13_Referencias_Informacion_Web: { type:Number } , 
    P13_Referencias_Blogs_Foros_Opiniones_Online: { type:Number } , 
    P13_Referencias_Info_Redes_Sociales: { type:Number } , 
    P13_Referencias_Buscadores: { type:Number } , 
    P13_Referencias_Tienda_Fisica: { type:Number } , 
    P13_Referencias_Comentarios_Online_Otros_Sobre_Experiencia: { type:Number } , 
    P14_Visitar_Tienda_Fisica_Previo_Compra_Online: { type:Number } , 
    P15_Lugar_De_Compra_Hogar: { type:Number } , 
    P15_Lugar_De_Compra_Empresa_O_Trabajo: { type:Number } , 
    P15_Lugar_De_Compra_En_Movilidad: { type:Number } , 
    P15_Lugar_De_Compra_Puntos_Publicos: { type:Number } , 
    P15_Lugar_De_Compra_En_Las_Tiendas: { type:Number } , 
    P16_Pers_Frec_Compra_Ropa: { type:Number } , 
    P16_Pers_Frec_Compra_Calzado: { type:Number } , 
    P16_Pers_Frec_Compra_Accesorios_De_Vestir: { type:Number } , 
    P16_Pers_Frec_Compra_Cosmeticos: { type:Number } , 
    P16_No_Pers_Frec_Compra_Celulares: { type:Number } , 
    P16_No_Pers_Frec_Compra_Computacion: { type:Number } , 
    P16_No_Pers_Frec_Compra_Electronicos: { type:Number } , 
    P16_No_Pers_Frec_Compra_Libros: { type:Number } , 
    P16_No_Pers_Frec_Compra_Medicamentos: { type:Number } , 
    P16_No_Pers_Frec_Compra_Juguetes: { type:Number } , 
    P16_Hogar_Frec_Compra_Supermercados: { type:Number } , 
    P16_Hogar_Frec_Compra_Hogar_Decoracion: { type:Number } , 
    P16_Hogar_Frec_Compra_Construccion: { type:Number } , 
    P16_Serv_Frec_Compra_Pasajes: { type:Number } , 
    P16_Serv_Frec_Compra_Tiquetes: { type:Number } , 
    P16_Serv_Frec_Compra_Hoteles: { type:Number } , 
    P16_Serv_Frec_Compra_Educacion_Online: { type:Number } , 
    P16_Serv_Frec_Compra_Comida_Rapida: { type:Number } , 
    P16_Frec_Compra_Otros: { type:Number } , 
    P17_A_Dispositivo_Conexion: { type:Number } , 
    P17_B_Dispositivo_Compra: { type:Number } , 
    P17_1_Compras_De_Celular_App: { type:Number } , 
    P17_2_Compras_De_Celular_Web: { type:Number } , 
    P18_Celular_Facilidad: { type:Number } , 
    P18_Celular_Comodidad: { type:Number } , 
    P18_Celular_Rapidez: { type:Number } , 
    P18_Celular_Seguridad: { type:Number } , 
    P18_Celular_Conveniencia: { type:Number } , 
    P18_Tableta_Facilidad: { type:Number } , 
    P18_Tableta_Comodidad: { type:Number } , 
    P18_Tableta_Rapidez: { type:Number } , 
    P18_Tableta_Seguridad: { type:Number } , 
    P18_Tableta_Conveniencia: { type:Number } , 
    P18_Tv_Facilidad: { type:Number } , 
    P18_Tv_Comodidad: { type:Number } , 
    P18_Tv_Rapidez: { type:Number } , 
    P18_Tv_Seguridad: { type:Number } , 
    P18_Tv_Conveniencia: { type:Number } , 
    P18_Portatil_Facilidad: { type:Number } , 
    P18_Portatil_Comodidad: { type:Number } , 
    P18_Portatil_Rapidez: { type:Number } , 
    P18_Portatil_Seguridad: { type:Number } , 
    P18_Portatil_Conveniencia: { type:Number } , 
    P18_Pc_Facilidad: { type:Number } , 
    P18_Pc_Comodidad: { type:Number } , 
    P18_Pc_Rapidez: { type:Number } , 
    P18_Pc_Seguridad: { type:Number } , 
    P18_Pc_Conveniencia: { type:Number } , 
    P19_Medio_De_Pago_Preferido: { type:Number } , 
    P19_Medio_De_Pago_Otros: { type:Number } , 
    P20_Portales_Internacionales_Productos_Personales_Amazon: { type:Number } , 
    P20_Portales_Internacionales_Para_Productos_Personales_Ebay: { type:Number } , 
    P20_Portales_Internacionales_Para_Productos_Personales_Fabricante: { type:Number } , 
    P20_Portales_Internacionales_Para_Productos_Personales_Aliexpress: { type:Number } , 
    P20_Portales_Internacionales_Para_Productos_Personales_Particulares: { type:Number } , 
    P20_Portales_Internacionales_Para_Productos_Personales_Otros: { type:Number } , 
    P20_Otro_Portal_Internacional_Para_Productos_Personales_Otros_Abierta: { type:String } , 
    P21_Portales_Nacionales_Para_Productos_Personales_Deprati: { type:Number } , 
    P21_Portales_Nacionales_Para_Productos_Personales_Comandato: { type:Number } , 
    P21_Portales_Nacionales_Para_Productos_Personales_Credeconom: { type:Number } , 
    P21_Portales_Nacionales_Para_Productos_Personales_Claro: { type:Number } , 
    P21_Portales_Nacionales_Para_Productos_Personales_Linio: { type:Number } , 
    P21_Portales_Nacionales_Para_Productos_Personales_Otros: { type:Number } , 
    P21_Portales_Nacionales_Para_Productos_Personales_No_Compro: { type:Number } , 
    P21_Otro_Portal_Nacional_Para_Productos_Personales_Abierta: { type:String} , 
    P22_Portales_Int_Para_Productos_No_Personales_Amazon: { type:Number } , 
    P22_Portales_Int_Para_Productos_No_Personales_Ebay: { type:Number } , 
    P22_Portales_Int_Para_Productos_No_Personales_Fabricante: { type:Number } , 
    P22_Portales_Int_Para_Productos_No_Personales_Aliexpress: { type:Number } , 
    P22_Portales_Int_Para_Productos_No_Personales_Particulares: { type:Number } , 
    P22_Portales_Int_Para_Productos_No_Personales_Otros: { type:Number } , 
    P22_Otro_Portal_Internacional_Para_Productos_No_Personales_Abierta: { type:String } , 
    P23_Portales_Nacionales_Para_Productos_No_Personales_Deprati: { type:Number } , 
    P23_Portales_Nacionales_Para_Productos_No_Personales_Comandato: { type:Number } , 
    P23_Portales_Nacionales_Para_Productos_No_Personales_Credenocom: { type:Number } , 
    P23_Portales_Nacionales_Para_Productos_No_Personales_Claro: { type:Number } , 
    P23_Portales_Nacionales_Para_Productos_No_Personales_Movistar: { type:Number } , 
    P23_Portales_Nacionales_Para_Productos_No_Personales_Disensa: { type:Number } ,
    P23_Portales_Nacionales_Para_Productos_No_Personales_Dominos: { type:Number } , 
    P23_Portales_Nacionales_Para_Productos_No_Personales_Telepizza: { type:Number } ,
    P23_Portales_Nacionales_Para_Productos_No_Personales_Linio: { type:Number } , 
    P23_Portales_Nacionales_Para_Productos_No_Personales_Otros: { type:Number } , 
    P23_Portales_Nacionales_Para_Productos_No_Personales_No_Compro: { type:Number } , 
    P23_Otro_Portal_Nacional_Para_Productos_No_Personales_Abierta: { type:String } , 
    P24_Portales_Int_Para_Servicios_Despegar: { type:Number } , 
    P24_Portales_Int_Para_Servicios_Tripadvisor: { type:Number } , 
    P24_Portales_Int_Para_Servicios_Atrapalo: { type:Number } , 
    P24_Portales_Int_Para_Servicios_Booking: { type:Number } ,
    P24_Portales_Int_Para_Servicios_Latam: { type:Number } , 
    P24_Portales_Nacionales_Para_Servicios_Cinemark: { type:Number } , 
    P24_Portales_Nacionales_Para_Servicios_Supercines: { type:Number } , 
    P24_Portales_Nacionales_Para_Servicios_Ticketshow: { type:Number } , 
    P24_Portales_Nacionales_Para_Servicios_Otros: { type:Number } , 
    P24_Portales_Nacionales_Para_Servicios_No_Compro: { type:Number } , 
    P24_Otro_Portal_Nacional_Para_Servicios: { type:String } , 
    P25_Porcentaje_De_Compras_Online_Online: { type:Number } , 
    P25_Porcentaje_De_Compras_Online_Offline: { type:Number } , 
    P26_ED1_Me_Ayuda_A_Realizar_Mis_Compras_Mas_Eficiente: { type:Number } , 
    P26_ED2_Es_Mas_Rapido_Que_Una_Tienda_fisica: { type:Number } , 
    P26_ED3_Es_Mas_Util_Que_Una_Tienda_Fisica: { type:Number } , 
    P26_ED4_Me_Permite_Hacer_Mejor_Mis_Compras: { type:Number } , 
    P26_ED5_Es_Muy_Valorado_Por_Mi: { type:Number } , 
    P26_ED6_Es_Mas_Ventajoso_Para_Hacer_Mis_Compras: { type:Number } , 
    P26_EE1_Aprender_A_Usar_Internet_Para_Compras_Es_Facil_Para_Mi: { type:Number } , 
    P26_EE2_Es_Facil_de_Usar_Para_Hacer_Mis_Compras: { type:Number } , 
    P26_EE3_Comprar_Online_No_Requiere_Demasiado_Esfuerzo: { type:Number } , 
    P26_EE4_Comprar_Online_Es_Claro_Y_Comprensible_Para_Mi: { type:Number } , 
    P26_SI1_Personas_Cercanas_Piensan_Yo_Deberia_Usar_Ecommerce: { type:Number } , 
    P26_SI2_La_Gente_Como_Yo_Compra_Online: { type:Number } , 
    P26_SI3_Personas_Que_Valoro_Prefieren_Comprar_Online: { type:Number } , 
    P26_SI4_Mis_Amigos_me_Animan_A_Comprar_Online: { type:Number } , 
    P26_FC1_Tengo_El_Control_Del_Proceso_De_Compra_Online: { type:Number } , 
    P26_FC2_Tengo_Recursos_Para_Comprar_Online: { type:Number } , 
    P26_FC3_Tengo_Las_Habilidades_Para_Comprar_Online: { type:Number } , 
    P26_FC4_Puedo_Comprar_Online_Aun_Si_Nadie_Me_Ayuda: { type:Number } , 
    P26_FC5_Puedo_Comprar_Bien_Online_Por_Mi_Cuenta: { type:Number } , 
    P26_FC6_Cuando_Compro_Alguien_Me_Ayuda: { type:Number } , 
    P26_FC7_Comprar_Online_Es_Compatible_Con_Otros_Sistemas: { type:Number } , 
    P26_ACT1_Comprar_Online_Me_Gusta: { type:Number } , 
    P26_ACT2_Comprar_Online_Es_Buena_Idea: { type:Number } , 
    P26_ACT3_Mi_Opinion_del_Ecommerce_Es_Positiva: { type:Number } , 
    P26_ACT4_Prefiero_Comprar_Online_Que_En_La_Tienda_Fisica: { type:Number } , 
    P26_MH1_Comprar_Online_Es_Divertido: { type:Number } , 
    P26_MH2_Comprar_Online_Es_Agradable: { type:Number } , 
    P26_MH3_Comprar_Online_Es_Entretenido: { type:Number } , 
    P26_HB1_Comprar_Online_Es_Un_Habito_Para_Mi: { type:Number } , 
    P26_HB2_Soy_Adicto_A_Comprar_Online: { type:Number } , 
    P26_HB3_Debo_Usar_Internet_Para_Comprar: { type:Number } , 
    P26_SP1_No_Me_Preocupa_Entregar_Informacion_Para_Comprar_Online: { type:Number } , 
    P26_SP2_Siento_Que_Es_Seguro_Comprar_Online: { type:Number } , 
    P26_SP3_Proporcionar_Info_Tdc_Es_Arriesgado: { type:Number } , 
    P26_SP4_Comprar_Online_Es_Mas_Arriesgado: { type:Number } , 
    P26_CP1_Los_Ecommerce_Son_De_Confianza: { type:Number } , 
    P26_CP2_Los_Ecommerce_Cumplen_Sus_Promesas: { type:Number } , 
    P26_CP3_Las_Tiendas_Online_No_Son_Oportunistas: { type:Number } , 
    P26_CP4_Ofrecen_Buen_Servicio: { type:Number } , 
    P26_CP5_Confio_En_Las_Tiendas_Online: { type:Number } , 
    P26_CP6_Confio_Trabajan_Correctamente: { type:Number } , 
    P26_CP7_Creo_Que_La_Tecnologia_Que_Usan_Es_Adecuada: { type:Number } , 
    P26_CP8_Confio_En_Que_Funcionan_Correctamente: { type:Number } , 
    P26_INT1_Intentaria_Comprar_Online: { type:Number } , 
    P26_INT2_Es_Probable_Que_Compre_Online: { type:Number } ,
    P26_INT3_Comprare_Online: { type:Number } , 
    P27_Productos_Personales_Para_Comprar_A_Futuro_Online_Calzado: { type:Number } , 
    P27_Productos_Personales_Para_Comprar_A_Futuro_Online_Accesorios_Vestir: { type:Number } , 
    P27_Productos_Personales_Para_Comprar_A_Futuro_Online_Cosmeticos: { type:Number } , 
    P27_Productos_Personales_Para_Comprar_A_Futuro_Online_Otros: { type:Number } , 
    P27_Productos_Personales_Para_Comprar_A_Futuro_Online_Otro: { type:Number } , 
    P27_Productos_Personales_Para_Comprar_A_Futuro_Online_Ningunos: { type:Number } , 
    P27_Otros_Productos_Personales_Para_Comprar_A_Futuro_Online_Abierta: { type:String } , 
    P28_Productos_No_Personales_Para_Comprar_A_Futuro_Online_Celulares: { type:Number } , 
    P28_Productos_No_Personales_Para_Comprar_A_Futuro_Online_Computacion: { type:Number } , 
    P28_Productos_No_Personales_Para_Comprar_A_Futuro_Online_Eqelectronicos: { type:Number } , 
    P28_Productos_No_Personales_Para_Comprar_A_Futuro_Online_Libros: { type:Number } , 
    P28_Productos_No_Personales_Para_Comprar_A_Futuro_Online_Hogar: { type:Number } , 
    P28_Productos_No_Personales_Para_Comprar_A_Futuro_Online_Medicamentos: { type:Number } , 
    P28_Productos_No_Personales_Para_Comprar_A_Futuro_Online_Supermercado: { type:Number } , 
    P28_Productos_No_Personales_Para_Comprar_A_Futuro_Online_Juguetes: { type:Number } , 
    P28_Productos_No_Personales_Para_Comprar_A_Futuro_Online_Otros: { type:Number } , 
    P28_Productos_No_Personales_Para_Comprar_A_Futuro_Online_Ninguno: { type:Number } , 
    P28_Otro_Producto_No_Personal_Para_Comprar_A_Futuro_Online_Abierta: { type:String} , 
    P29_Servicios_Para_Comprar_A_Futuro_Online_Delivery: { type:Number } , 
    P29_Servicios_Para_Comprar_A_Futuro_Online_Pasajes: { type:Number } , 
    P29_Servicios_Para_Comprar_A_Futuro_Online_Hoteles: { type:Number } , 
    P29_Servicios_Para_Comprar_A_Futuro_Online_Tiquetes: { type:Number } , 
    P29_Servicios_Para_Comprar_A_Futuro_Online_Salud_Atencion: { type:Number } , 
    P29_Servicios_Para_Comprar_A_Futuro_Online_Seguro_Vida: { type:Number } , 
    P29_Servicios_Para_Comprar_A_Futuro_Online_Seg_Exequiales: { type:Number } , 
    P29_Servicios_Para_Comprar_A_Futuro_Online_Ninguno: { type:Number } , 
    P30_Calificacion_Experiencia_De_Comercio_Electronico_Favorable: { type:Number } , 
    P30_Calificacion_Experiencia_De_Comercio_Electronico_Util: { type:Number } , 
    P30_Calificacion_Experiencia_De_Comercio_Electronico_Beneficiosa: { type:Number } , 
    P30_Calificacion_Experiencia_De_Comercio_Electronico_Satisfactoria: { type:Number } , 
    P30_Calificacion_Experiencia_De_Comercio_Electronico_Placentera: { type:Number } , 
    P30_Calificacion_Experiencia_De_Comercio_Electronico_Buena: { type:Number } , 
    P31_Info_Lunes_A_Mierc: { type:Number } , 
    P31_Info_Jueve_Y_Vier: { type:Number } , 
    P31_Fines_De_Semana: { type:Number } , 
    P26_ED_Expectativa_Desempenio_Total: { type:String } , 
    P26_EE_Expectativa_Esfuerzo_Total: { type:String } , 
    P26_SC_Influencia_Social_Total: { type:String } , 
    P26_FC_Condiciones_Facilitadoras_Total: { type:String} , 
    P26_ACT_Actitudes_Total: { type:String } ,
    P26_MH_Motivacion_Hedonica_Total: { type:String } , 
    P26_HB_Habito_Total: { type:String } , 
    P26_SP_Seguridad_Percibida_Total: { type:String } , 
    P26_CP_Confianza_Percibida_Total: { type:String } , 
    P26_INT_Intencion_Total: { type:String } 
})
module.exports = mongoose.model('Multiple',MultipleSchema)