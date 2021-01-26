const express =require('express');
const router =express.Router();

//Controller
const controller = require('../controllers/index.controller') //se importan el/los controladores

// respond with "conexion correcta" when a GET request is made to the homepage
router.get('/', controller.index);

module.exports = router //para que las rutas puedan ser exportadas