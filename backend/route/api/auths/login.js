const express = require('express')
const _ = express.Router()
const loginController = require('../../../controllers/loginController')


_.post('/login',loginController)

module.exports=_