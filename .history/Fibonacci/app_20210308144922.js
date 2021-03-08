//Serie de Fibonacci
const fs = require('fs');

let fibo1 = 1;
let fibo2 = 1;

console.log(`${fibo1}`);
for(let i = 2; i<=7 ; i++){
    console.log(`${fibo2}`);
    fibo2 = fibo1 + fibo2;
    fibo1 = fibo2 - fibo1;
}
let data = 
fs.writeFile('message.txt',data,(err)=>{
    if(err) throw err;
    console.log('Archivo guardao')
});