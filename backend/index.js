require('dotenv').config()
const express = require('express');
const cors = require('cors');
const  route  = require('./route');
const app = express()
const port = 3000


// Middleware
app.use(express.json())
app.use(cors())
app.use(route)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
