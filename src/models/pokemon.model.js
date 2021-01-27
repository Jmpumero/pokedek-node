const mongoose = require('mongoose');
//const Schema=mongoose.Schema otra forma
const {Schema}=mongoose

const PokeSchema= new Schema({ //se define el modelo(schema) de los datos(documentos) en la bd
    numero:Number,
    region: String,
    name: String //como en modelo solo se guarda una string
})

//ahora se debe exportar el modelo
const PokeModel = mongoose.model('pokemons',PokeSchema)// el primer parametro es el mismo nombre de la colecion de la bd

module.exports = PokeModel