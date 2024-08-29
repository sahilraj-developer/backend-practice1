const express = require('express');
const app =express();
const connectDB= require('./db/config')
require('dotenv').config()
const port  = process.env.PORT;
const cors =require('cors')
const userRouter = require('./routes/user.route.js')

connectDB(process.env.mongoose);

app.use(cors())
app.use(express.json())

app.use('/api/v1/users',userRouter)



app.listen(port,()=>{console.log(`port is running at http://localhost:${port}`)})