//rep= request->peticion del cliente; 
//res=response->respuesta del servidor
//cliente->navegador
const express = require('express');
var app = express();
const path =require('path') //para normalizar la ruta absoluta extraida de __dirname


app.set('view engine','pug'); //Sets Pug as the View Engine / Template Engine
app.set('views',path.join(__dirname,'views')); //para que express vea la carpeta de las vistas y las use

//ROUTES
//const routes = require('./routes/index.routes') 
//app.use(routes)
app.use(require('./routes/index.routes')) //se importan las rutas



//STATIC FILE (para poder crear la ruta estatica)
app.use(express.static(path.join(__dirname,'../public')))
//*** */

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})



app.listen(3000,function(err) {
    if (!err) {
        console.log('Server is running at port 3000');
    } else {
        console.log(JSON.stringify(err));
    }
})

