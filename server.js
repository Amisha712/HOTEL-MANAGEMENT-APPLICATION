const express = require("express");


const app=express();
const dbConfig=require('./db')
const roomsRoute = require('./routes/roomsRoute')
const userRoute = require('./routes/usersRoute')
const BookingsRoute = require('./routes/bookingsRoute')

app.use(express.json())
app.use('/api/rooms',roomsRoute)
app.use('/api/users', userRoute)
app.use('/api/bookings', BookingsRoute)


const port=process.env.PORT || 5000;
app.listen(port,()=>console.log(`server running on port ${port}`))