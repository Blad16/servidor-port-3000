require('dotnev').config()
const Server = require('./models/server')
const server = new Server();
const express = require ('express')
const app = express()
app.get('/', function (rq,res){
res.send('hello world ') 

})
app.listen(process.env.PORT, function(){

    console.log("el puerto esta corriendo el puerto  TCP" + process.env.PORT)
})






// error require stack module not found//
// error por no tener instalados los modulos de node js //
