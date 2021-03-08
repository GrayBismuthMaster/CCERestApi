//Serie de Fibonacci
const fs = require('fs');
let crearSerie = (cantidad)=>{
    return new Promise((resolve,reject)=>{
        let fibo1 = 1;
        let fibo2 = 1;
        let data = '';
        data = data + fibo1+'\n';
        console.log(`${fibo1}`);
        for(let i = 2; i<=cantidad-1 ; i++){
            console.log(`${fibo2}`);
            data = data + `${fibo2}\n`;
            fibo2 = fibo1 + fibo2;
            fibo1 = fibo2 - fibo1;
    
        }
        fs.writeFile('Fibo.txt',data,(err)=>{
            if(err) 
                reject('error al crear archivo');
            else{
                resolve( 'Archivo guardao');
            }
        });    
    })
}
module.exports = {
    crearSerie
};