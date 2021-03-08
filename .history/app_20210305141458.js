//const mensaje = new Promise((resolve,reject)=>{
function mensaje(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(false)
            {
                resolve("esto se ejecuta luego de 3")
            }
            else{
                reject('Hubo un error')
            }
        },3000);        
    });
}
async function llamadaAsync(){
    console.log('Llamada .... ');
    const resultado = await mensaje();
    console.log(resultado);
}
llamadaAsync().then;
/*
mensaje.then(ms=>{
    console.log(ms);
})
.catch(error =>{
    console.log(error);
})
*/