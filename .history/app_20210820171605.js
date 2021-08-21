const express = require('express');
const app = express(); //Instancia d
const conectarDB = require('./config/db')
const preguntas = require('./routes/preguntas')
const preguntas2018 = require('./routes/preguntas2018')
const preguntas2020 = require('./routes/preguntas2020')
const FrecuenciaUsoInternet=require('./routes/frecuenciaUsoInternet')
const FrecuenciaUsoInternet2018=require('./routes/frecuenciaUsoInternet2018')
const FrecuenciaUsoInternet2020=require('./routes/frecuenciaUsoInternet2020')
const motivoNoCompra = require('./routes/motivoNoCompra')
const motivoNoCompra2018 = require('./routes/motivoNoCompra2018')
const motivoNoCompra2020 = require('./routes/motivoNoCompra2020')
const compraNoCompra = require('./routes/compraNoCompra')
const compraNoCompra2018 = require('./routes/compraNoCompra2018')
const compraNoCompra2020 = require('./routes/compraNoCompra2020')
const motivacionCompra = require('./routes/motivacionCompra')
const motivacionCompra2018 = require('./routes/motivacionCompra2018')
const motivacionCompra2020 = require('./routes/motivacionCompra2020')


const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))//Middleware


app.use('/api/preguntas2017',preguntas);
app.use('/api/preguntas2018',preguntas2018);
app.use('/api/preguntas2020',preguntas2020);
app.use('/api/preguntas2017/frecuenciaUsoInternet',FrecuenciaUsoInternet)
app.use('/api/preguntas2018/frecuenciaUsoInternet',FrecuenciaUsoInternet2018)
app.use('/api/preguntas2020/frecuenciaUsoInternet',FrecuenciaUsoInternet2020)
app.use('/api/preguntas2017/motivoNoCompra',motivoNoCompra);
app.use('/api/preguntas2018/motivoNoCompra',motivoNoCompra2018);
app.use('/api/preguntas2020/motivoNoCompra',motivoNoCompra2020);
app.use('/api/preguntas2017/compraNoCompra',compraNoCompra);
app.use('/api/preguntas2018/compraNoCompra',compraNoCompra2018);
app.use('/api/preguntas2020/compraNoCompra',compraNoCompra2020);
app.use('/api/preguntas2017/motivacionCompra',motivacionCompra);
app.use('/api/preguntas2018/motivacionCompra',motivacionCompra2018);
app.use('/api/preguntas2020/motivacionCompra',motivacionCompra2020);

//Conectar a la base de datos
conectarDB();    
app.listen({port:process.env.PORT||5000},()=>{
    console.log(`Escuchando en el puerto`)
})
  
