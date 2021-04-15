const express = require('express');
const app = express(); //Instancia d
const conectarDB = require('./config/db')
const ruta = express.Router();

ruta.get('/',(req,res)=>{
    res.json('Listo el get')
})
app.use(express.json());

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