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