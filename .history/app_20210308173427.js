const express = require('express');
const app = express(); //Instancia d
const port = process.env.PORT || 4000; // Valor de variable
app.use(express.json())
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
    } 
    else{
        res.send(usuario)
    }
})//Los dos puntos siginifica que son params
app.post('/api/usuarios/',(req,res)=>{
    const usuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre
    };
    usuarios.push(usuario)
})
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