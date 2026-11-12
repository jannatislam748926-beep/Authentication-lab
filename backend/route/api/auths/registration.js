const express = require('express')
const _ = express.Router()
const registrationController = require('../../../controllers/registrationController')
const secureapi = require('../../../middlewars/secureapi')

_.post('/registration',secureapi,registrationController)

module.exports=_