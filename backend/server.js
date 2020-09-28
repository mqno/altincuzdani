const path = require('path')
const express = require('express')
const bodyParser = require("body-parser");
const dotenv = require('dotenv')
const passport = require('passport')
const connectDB = require('./config/db')



//Load config /ayarlari ata
dotenv.config({path: './config/config.env'})
//passport config
//require('./config/passport')(passport)

connectDB()
const app=express()

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());










const PORT = process.env.PORT || 5000


app.listen(
    PORT,
    console.log( `Server  ${process.env.NODE_ENV} modunda ${PORT} nolu portta calismaktadir. `)
    )
