
const controller = {}
const titulo= 'Desde el servido con pug usando una variable'
controller.index = (req, res) =>{
    res.render('index',{title:titulo}) 
      
    
  }

module.exports = controller
//mongodb+srv://jmpumero:<password>@cluster0.b66wx.mongodb.net/<dbname>?retryWrites=true&w=majority