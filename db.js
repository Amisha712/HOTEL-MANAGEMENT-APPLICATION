const  mongoose = require('mongoose');

var mongoURL='mongodb://localhost:27017/sheyrooms'

mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true})

var connection=mongoose.connection

connection.on('error',()=>{
    console.log('Mongo DB connection failed')
})
connection.on('connected',()=>{
    console.log('Mongo DB connection successfull')
})

 module.exports = mongoose