const express = require('express');
const app = express(); //Instancia de 
const port = process.env.PORT || 4000; // Valor de variable
app.get('/',(req,res)=>{
    res.send('Hola mundo desde Express.');
});
app.get('/api/preguntas',(req,res)=>{
    res.send(['pollo','Casita'])
})
app.get('/api/preguntas/:id',(req,res)=>{
    res.send(req.param.id)
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