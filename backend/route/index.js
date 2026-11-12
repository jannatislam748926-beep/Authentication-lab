const express = require('express')
const _ = express.Router()
const AllAuth=require('./api/index')

_.use(`${process.env.API_URI}`,AllAuth)


module.exports=_ 