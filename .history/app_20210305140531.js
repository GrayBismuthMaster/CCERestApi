//const mensaje = new Promise((resolve,reject)=>{
mensaje()
setTimeout(()=>{
    if(false)
    {
        resolve("esto se ejecuta luego de 3")
    }
    else{
        reject('Hubo un error')
    }
},3000);
//});

mensaje.then(ms=>{
    console.log(ms);
})
.catch(error =>{
    console.log(error);
})