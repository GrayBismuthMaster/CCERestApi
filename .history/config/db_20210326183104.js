const mongoose = require('mongoose')
require('dotenv').config({path: 'variables.env'})
const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO,{
            useUnifiedTopology:true, 
            useNewUrlParser:true,
            useFindAndModify:false,
            
            useCreateIndex: true,
            keepAlive: true, 
            serverSelectionTimeoutMS: 10000
        }).then(
            () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ },
            err => { /** handle initial connection error */  console.log(err)}
          );;
        
        console.log('DB Conectada')
    } catch (error) {
        console.log('Hubo un error al conectar a la base de datos')
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectarDB