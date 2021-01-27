
const controller = {}
const conection= require('../dbConections/dbconection') //se importa la conecion a la bd

const PokeModel= require('../models/pokemon.model')
controller.index = async(req, res) =>{
    try {
      await conection()
      const allPokemons=await PokeModel.find()
      console.log(allPokemons)
      const titulo= 'Desde el servido con pug usando una variable'
      res.render('index',{title:titulo}) 

    } catch (error) {
        console.error(error)
    }
    
      
    
  }

module.exports = controller
