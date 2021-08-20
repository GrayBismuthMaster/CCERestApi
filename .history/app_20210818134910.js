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
  
/*

const usuarios = [
    {id:1, nombre:'Grover'},
    {id:2, nombre:'George'},
    {id:3, nombre:'Marco'}
]
app.get('/',(req,res)=>{
    res.send('Hola mundo desde Express.');
});
app.get('/api/usuarios',(req,res)=>{
    res.send(['pollo','Casita']);
})
app.get('/api/usuarios/:id',(req,res)=>{
    let usuario = usuarios.find(u=>u.id===parseInt( req.params.id));
    if(!usuario){
        res.status(404).send('El usuario no fue encontrado'); 
        const schema = Joi.object({
            nombre: Joi.string().min(3).required()
        });
    } 
    else{
        res.send(usuario)
    }
    const schema = Joi.object({
        nombre: Joi.string().min(3).required()
    })
})//Los dos puntos siginifica que son params
app.post('/api/usuarios/',(req,res)=>{
    if(!req.body.nombre){
        res.status(400).send("ingresa un nombre")//Bad request
        return;
    }
    const usuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre
    };
    usuarios.push(usuario); 
    res.send(usuario)
})
app.put('/api/usuarios/:id',(req,res)=>{
    let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if(!usuario) res.status(404).send('El usuario no fue encontrado');
    const schema = Joi.object({
        nombre: Joi.string().min(3).required()
    })
    const {error, value} = schema.validate({nombre: req.body.nombre});
    if(error){
        const mensaje = error.details[0].message;
        res.status(400).send(mensaje);
        return;
    }
    usuario.nombre = value.nombre;
})
*/
//ASYNC AWAIT Y PROMISES
// //const mensaje = new Promise((resolve,reject)=>{
// function mensaje(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(true)
//             {
//                 resolve("esto se ejecuta luego de 3")
//             }
//             else{
//                 reject('Hubo un error')
//             }
//         },3000);        
//     }); 
// }
// async function llamadaAsync(){
//     console.log('Llamada .... ');
//     const resultado = await mensaje();
//     return resultado;
// }

// llamadaAsync()
// .then(x => {console.log(x)})
// .catch(e=>console.log(e));
// /*
// mensaje.then(ms=>{
//     console.log(ms);
// })
// .catch(error =>{
//     console.log(error);
// })
// */