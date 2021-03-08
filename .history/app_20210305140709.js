//const mensaje = new Promise((resolve,reject)=>{
function mensaje(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(true)
            {
                resolve("esto se ejecuta luego de 3")
            }
            else{
                reject('Hubo un error')
            }
        },3000);        
    })
}
/*
mensaje.then(ms=>{
    console.log(ms);
})
.catch(error =>{
    console.log(error);
})