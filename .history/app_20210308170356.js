const express = require('express');
const app = express(); //Instancia d
const port = process.env.PORT || 4000; // Valor de variable
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
    let usuario = usuarios.find()
})//Los dos puntos siginifica que son params
app.listen(port,()=>{
    console.log(`escuchando en el puerto ${port}`);
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