const http=require('http')
//rep= request->peticion del cliente; 
//res=response->respuesta del servidor
//cliente->navegador
const server=http.createServer((req,res)=>{
    console.log('Un cliente conectado')
    res.end('la conexion ha sido correcta')

})
server.listen(3000,()=>{
    console.log("servidor a la espera de conexiones")
})