const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const items = require('./routes/api/items')
// import express from ('express')
// import bodyParser from ('body-parser')

const app = express();
//body parser
app.use(express.json())
//DB config
const db = require('./config/keys').mongoURI
//connect to mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongodb Connected '))
    .catch(err => console.log(err))
//use routes
app.use('/api/items', items)
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server started on port: ${port}`))