const express = require ('express');


class server { 
    constructor(){
        this.app = express()
        this.app.get('/', function(req,res){})
        res.send ('hello al mundo')

    }
}
this.app.listen(process.env.PORT, () => 
console.log("el puerto esta corriendo el puerto TCP"+ process.env.PORT))

module.exports = server