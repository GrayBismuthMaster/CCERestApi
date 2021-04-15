const express = require('express');
const app = express(); //Instancia d
app.use(express.json());
const conectarDB = require('./config/db')

//Conectar a la base de datos
conectarDB();    
app.listen({port:process.env.PORT||5000},()=>{
    console.log(`Escuchando en el puerto`)
})
  

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