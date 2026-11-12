const express = require('express')
const _ = express.Router()
const Registration =require('./auths/registration')
const Login =require('./auths/login')

_.use('/authentication',Registration)
_.use('/authentication',Login)

module.exports=_
