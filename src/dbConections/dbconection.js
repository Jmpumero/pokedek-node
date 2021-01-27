const mongoose = require('mongoose');


const password='192627'
const dbname = 'pokedex'
const uri =`mongodb+srv://jmpumero:${password}@cluster0.b66wx.mongodb.net/${dbname}?retryWrites=true&w=majority`

//otra forma: 
//uri = "mongodb+srv://jmpumero:"+password+"@cluster0.b66wx.mongodb.net/"+dbname+"?retryWrites=true&w=majority"

module.exports = ()=> mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}); //se exporta la conexion a la bd

//otra forma:
// const conect = ()=>{
//     mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
// }
// module.exports = connect