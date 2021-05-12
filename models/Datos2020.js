const mongoose = require('mongoose');
const datos2020Schema = mongoose.Schema({ 
    P1_Pais : { type : Number },
    P1_1_Ciudad_en_Ecuador: { type : Number },
    P1_2_Otra_Ciudad: { type : String } ,
    P2_Genero: { type : Number },
    P3_Edad: { type : Number },
    P4_Nivel_Educativo: { type : Number },
    P5_Zona_de_Residencia: { type : Number },
    P6_Relacion_de_Trabajo : { type : Number },
    P6_1_Tipo_de_Relacion : { type : String } ,
    P6_1_Otros : { type : Number } ,
    P7_Ingreso_Mensual_dolares: { type : Number },
    P8_Estrato: { type : Number },
    P9_Frecuencia_Uso_Internet: { type : Number },
    P10_Revisar_enviar_correos: { type : Number },
    P10_Leer_noticias: { type : Number },
    P10_Buscar_direcciones: { type : Number },
    P10_Uso_RRSS: { type : Number },
    P10_Whatsapp: { type : Number },
    P10_Entretenimiento : { type : Number },
    P10_Pagos_Transacciones_bancarias: { type : Number },
    P10_Buscar_informacion_de_productos: { type : Number },
    P10_Buscar_informacion_de_servicios: { type : Number },
    P10_Comprar_productos_servicios: { type : Number },
    P11_1_1_Prefiero_ver_lo_que_compro: { type : Number } ,
    P11_1_2_Miedo_a_entregar_mi_informacion_personal: { type : Number } ,
    P11_1_3_Desconfianza_en_la_forma_de_pago: { type : Number } ,
    P11_1_4_Miedo_a_ser_estafado_enganiado: { type : Number } ,
    P11_1_5_Desconfio_de_la_informacion_que_ofrecen_las_tiendas_vendedores_en_linea: { type : Number } ,
    P11_1_6_Desconocimiento_falta_de_informacion: { type : Number } ,
    P11_1_7_Prefiero_hablar_con_un_vendedor: { type : Number } ,
    P11_1_8_Dificultad_para_recibir_el_pedido_que_no_llegue_el_pedido: { type : Number } ,
    P11_1_9_Costos_del_envio: { type : Number } ,
    P11_1_10_Lo_he_intentado_sin_exito: { type : Number } ,
    P11_1_11_Malas_referencias_de_otras_personas: { type : Number } ,
    P11_1_12_Otras : { type : Number } ,
    P11_1_1_Especifica_otras : { type : String } ,
    P11_2_1_Tener_Informacion_guia_tutoriales_de_compra: { type : Number } ,
    P11_2_2_Tener_garantias_en_entrega_y_en_el_pago: { type : Number } ,
    P11_2_3_Tener_asistencia_y_atencion: { type : Number } ,
    P11_2_4_Facilidad_de_pago: { type : Number } ,
    P11_2_5_Variedad_de_formas_de_pago: { type : Number } ,
    P11_2_6_Tutoriales_o_induccion_para_realizar_la_compra: { type : Number } ,
    P11_2_7_Tener_variedad_de_la_oferta: { type : Number } ,
    P11_2_8_Mejor_precio: { type : Number } ,
    P11_2_9_Otras: { type : Number } ,
    P11_2_1_Especifica_otras : { type : String } ,
    P11_3_1_Ropa_Prendas_de_vestir: { type : Number } ,
    P11_3_2_Calzado: { type : Number } ,
    P11_3_3_Accesorios_de_vestir: { type : Number } ,
    P11_3_4_Cosmeticos_Perfumeria_Belleza: { type : Number } ,
    P11_3_5_Celulares: { type : Number } ,
    P11_3_6_Computacion: { type : Number } ,
    P11_3_7_Electrodomesticos: { type : Number } ,
    P11_3_8_Equipos_electronicos: { type : Number } ,
    P11_3_9_Peliculas: { type : Number } ,
    P11_3_10_Periodicos: { type : Number } ,
    P11_3_11_Musica_en_streaming: { type : Number } ,
    P11_3_12_Juegos_en_linea: { type : Number } ,
    P11_3_13_Libros: { type : Number } ,
    P11_3_14_Medicamentos: { type : Number } ,
    P11_3_15_Juguetes: { type : Number } ,
    P11_3_16_Productos_de_Supermercado: { type : Number } ,
    P11_3_17_Mobiliario_y_decoracion_para_el_hogar: { type : Number } ,
    P11_3_18_Materiales_de_construccion: { type : Number } ,
    P11_3_19_Pasajes: { type : Number } ,
    P11_3_20_Tiquetes_entradas_cine_teatro: { type : Number } ,
    P11_3_21_Hoteles: { type : Number } ,
    P11_3_22_Educacion_cursos_online: { type : Number } ,
    P11_3_23_Comida_a_domicilio: { type : Number } ,
    P11_4_1_Amigos_familiares: { type : Number } ,
    P11_4_2_Informacion_en_Internet : { type : Number } ,
    P11_4_3_Blogs_foros_y_opiniones_en_linea : { type : Number } ,
    P11_4_4_Buscadores: { type : Number } ,
    P11_4_4_Informacion_tienda_fisica: { type : Number } ,
    P11_4_5_Comentarios_calificaciones : { type : Number } ,
    P11_4_6_RRSS_Facebook_instagram_twitter_otras: { type : Number } ,
    P11_4_7_Influencers_lideres_de_opinion: { type : Number } ,
    P11_5_1_TDC: { type : Number } ,
    P11_5_2_TDB: { type : Number } ,
    P11_5_3_Efectivo: { type : Number } ,
    P11_5_4_Deposito: { type : Number } ,
    P11_5_5_Cheque: { type : Number } ,
    P11_5_6_Credito_directo: { type : Number } ,
    P11_5_7_Wallet: { type : Number } ,
    P11_6_1_En_el_sitio_web_del_comercio: { type : Number } ,
    P11_6_2_En_la_aplicacion_del_comercio: { type : Number } ,
    P11_6_3_Por_telefono: { type : Number } ,
    P11_6_4_Pago_contra_entrega_domicilio_oficina: { type : Number } ,
    P11_6_5_Retiro_en_el_local_comercial: { type : Number } ,
    P11_6_6_Kioskos: { type : Number } ,
    P12_1_Productos_en_tiendas_en_linea_ecuatorianas: { type : Number },
    P12_2_Productos_en_tiendas_en_linea_internacionales: { type : Number },
    P12_3_Servicios_en_tiendas_en_linea_ecuatorianas: { type : Number },
    P12_4_Servicios_en_tiendas_en_linea_internacionales: { type : Number },
    P13_1_Amigos_Familiares: { type : Number } ,
    P13_2_Informacion_en_la_Web : { type : Number } ,
    P13_3_Blogs_foros_y_opiniones_en_linea : { type : Number },
    P13_4_Informacion_RRSS: { type : Number },
    P13_5_Buscadores: { type : Number } ,
    P13_6_La_informacion_tienda_fisica: { type : Number } ,
    P13_7_Comentarios_de_otros_clientes_en_Internet : { type : Number },
    P14_Visita_tienda_fisica : { type : Number },
    P15_1_Hogar: { type : Number },
    P15_2_Lugar_de_trabajo: { type : Number },
    P15_3_Espacios_publicos: { type : Number },
    P15_4_En_movimiento : { type : Number },
    P16_Dias_preferidos_de_compra: { type : Number },
    P17_1_Ropa : { type : Number },
    P17_2_Calzado: { type : Number },
    P17_3_Accesorios_de_vestir: { type : Number },
    P17_4_Cosmeticos: { type : Number },
    P17_5_Productos_y_cosmetica_infantil : { type : Number },
    P17_6_Celulares: { type : Number },
    P17_7_Computacion: { type : Number },
    P17_8_Equipos_electronicos : { type : Number },
    P17_9_Electrodomesticos : { type : Number },
    P17_10_Articulos_deportivos: { type : Number },
    P17_11_Periodicos: { type : Number },
    P17_12_Juegos_en_linea: { type : Number },
    P17_13_Peliculas: { type : Number },
    P17_14_Musica_en_streaming: { type : Number },
    P17_15_Libros: { type : Number },
    P17_16_Hogar : { type : Number },
    P17_17_Comida : { type : Number },
    P17_18_Medicamentos: { type : Number },
    P17_19_Productos_de_supermercado: { type : Number },
    P17_20_Juguetes: { type : Number },
    P17_21_Pasajes : { type : Number },
    P17_22_Educacion: { type : Number },
    P17_23_Reserva_hoteles_alojamiento: { type : Number },
    P17_24_Tiquetes: { type : Number },
    P17_25_Materiales_de_construccion: { type : Number },
    P17_26_Productos_y_servicios_para_mascotas: { type : Number },
    P17_27_Motos: { type : Number },
    P17_28_Vehiculos: { type : Number },
    P17_29_Compras_por_suscripcion_musica_juegos_streaming: { type : Number },
    P17_30_Licores: { type : Number },
    P17_31_Bebidas: { type : Number },
    P17_32_Snacks_Golosinas: { type : Number },
    P17_33_Lacteos_queso_leche_yogurt: { type : Number },
    P17_34_Otros: { type : Number },
    P17_1_Paniales: { type : Number } ,
    P17_1_Panitos_humedos : { type : Number } ,
    P17_1_Cosmeticos_infantiles: { type : Number } ,
    P17_1_Shampoo: { type : Number } ,
    P17_1_Aceites_para_ninos: { type : Number } ,
    P17_1_Tintes: { type : Number } ,
    P17_1_Detergentes_de_lavar_la_ropa: { type : Number } ,
    P17_1_Suavizantes_de_ropa: { type : Number } ,
    P17_1_Limpiadores_para_el_hogar: { type : Number } ,
    P17_1_Jabon_de_tocador: { type : Number } ,
    P17_1_Alimentos_en_general: { type : Number } ,
    P18_Dispositivo_de_Conexion : { type : Number },
    P18_Dispositivo_de_Compra : { type : Number },
    P19_1_Compras_APP_de_la_marca : { type : Number },
    P19_2_Compras_WEB: { type : Number },
    P19_3_En_portales_varias_marcas: { type : Number },
    P19_4_APP_varias_marcas : { type : Number },
    P20_1_Facilidad: { type : Number },
    P20_2_Comodidad: { type : Number },
    P20_3_Rapidez: { type : Number },
    P20_4_Seguridad: { type : Number },
    P20_5_Conveniencia: { type : Number },
    P20_6_No_utilizo_este_dispositivo: { type : Number },
    P21_Medio_de_pago_preferido : { type : Number },
    P21_1_Otro_medio_de_pago : { type : String} ,
    P22_Preferencia_de_pago_TDC: { type : Number } ,
    P23_Preferencia_para_diferir_pago_TDC: { type : Number } ,
    P24_1_WEB: { type : Number } ,
    P24_2_APP: { type : Number } ,
    P24_3_Telefono: { type : Number } ,
    P24_4_Contra_entrega : { type : Number },
    P24_5_Retiro_en_tienda: { type : Number } ,
    P24_6_Kioskos: { type : Number } ,
    P25_1_Amazon: { type : Number },
    P25_2_eBay: { type : Number },
    P25_3_Wish: { type : Number } ,
    P25_4_Ali_Express: { type : Number } ,
    P25_5_Target: { type : Number } ,
    P25_6_Walmart: { type : Number },
    P25_7_Falabella: { type : Number } ,
    P25_8_GAP: { type : Number } ,
    P25_9_Otros: { type : Number } ,
    P25_1_Otros: { type : String } ,
    P26_1_De_Pratti: { type : Number } ,
    P26_2_The_North_Face_Ecuador: { type : Number } ,
    P26_3_Totto_Ecuador: { type : Number } ,
    P26_4_ETA_FASHION: { type : Number } ,
    P26_5_VASARI: { type : Number } ,
    P26_6_FunkyFish: { type : Number } ,
    P26_7_No_compro_en_linea_en_tiendas_nacionales: { type : Number },
    P26_8_Otros: { type : Number } ,
    P26_1_Otros : { type : String} ,
    P27_1_Amazon: { type : Number } ,
    P27_2_ebay: { type : Number } ,
    P27_3_Wish: { type : Number } ,
    P27_4_Ali_Express: { type : Number } ,
    P27_5_DELL: { type : Number } ,
    P27_6_Apple: { type : Number },
    P27_7_Best_Buy: { type : Number } ,
    P27_8_Otros: { type : Number } ,
    P27_1_Otros : { type : String } ,
    P28_1_De_Pratti: { type : Number } ,
    P28_2_Comandato: { type : Number } ,
    P28_3_Creditos_Economicos: { type : Number } ,
    P28_4_Claro: { type : Number },
    P28_5_Movistar: { type : Number } ,
    P28_6_PYCCA: { type : Number } ,
    P28_7_TiA: { type : Number } ,
    P28_8_SONY: { type : Number } ,
    P28_9_No_compro_en_linea_en_tiendas_nacionales: { type : Number } ,
    P28_10_Otros: { type : Number } ,
    P28_1_Otros: { type : String } ,
    P29_1_Despegar: { type : Number } ,
    P29_2_Booking: { type : Number } ,
    P29_3_Cinemark: { type : Number } ,
    P29_4_Supercines: { type : Number } ,
    P29_5_Ticketshow: { type : Number } ,
    P29_6_Latam: { type : Number } ,
    P29_7_Tame: { type : Number } ,
    P29_8_Avianca: { type : Number },
    P29_9_Otros: { type : Number } ,
    P29_1_Otros: { type : String } ,
    P30_Ayuda_social : { type : Number },
    P31_Abandono_de_la_compra: { type : Number },
    P31_1_1_Problemas_WEB_APP: { type : Number } ,
    P31_1_2_Precio_inconsistente: { type : Number } ,
    P31_1_3_Dudas_en_la_compra: { type : Number },
    P31_1_4_No_respuesta_de_consultas : { type : Number } ,
    P31_1_5_El_tiempo_de_entrega : { type : Number } ,
    P31_1_6_Mas_facil_comprar_personalmente: { type : Number },
    P31_1_7_El_portal_o_APP_complicada: { type : Number } ,
    P32_Motivadores_mas_compras_online : { type : Number },
    P32_1_Otros_motivadores: { type : String } ,
    P33_1_Uber: { type : Number },
    P33_2_Cabify: { type : Number },
    P33_3_Sweet_y_Coffee: { type : Number },
    P33_4_Mc_Donalds: { type : Number },
    P33_5_Tipti: { type : Number },
    P33_6_Rappi: { type : Number },
    P33_7_Glovo: { type : Number },
    P33_8_UbertEats: { type : Number },
    P33_9_SuperEasy: { type : Number },
    P33_1APPS_valorada_adicional : { type : String } ,
    P34_1_Lunes_a_Miercoles: { type : Number },
    P34_2_Jueves_y_Viernes: { type : Number },
    P34_3_Fin_de_Semana_feriado: { type : Number },
    P35_1_Conveniencia: { type : Number },
    P35_2_Ahorro_de_tiempo: { type : Number },
    P35_3_Ahorro_de_esfuerzo: { type : Number },
    P35_4_Rapidez: { type : Number },
    P35_5_Comodidad: { type : Number },
    P35_6_Satisfaccion_de_la_compra: { type : Number },
    P35_7_Confiabilidad: { type : Number },
    P35_8_Productos: { type : Number },
    P36_Referido_UEES: { type : String } 


    })        

    module.exports = mongoose.model('datos2020',datos2020Schema)