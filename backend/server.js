require("dotenv").config();
const express=require('express')
require('./config/dbConnect')
const usersRoute = require('./routes/users/usersRoute')
const accountRoute = require('./routes/accounts/accountRoute')
const transactionsRoute=require('./routes/transactions/transactionsRoute');
const globalHandler = require("./middlewares/globalHandler");

const app=express()

//middleware
app.use(express.json())
app.use(express.urlencoded())
//error handlers
app.use(globalHandler)

//routes
//user routes
app.use('/api/v1/users',usersRoute)
//account routes
app.use('/api/v1/accounts',accountRoute);
//transactions routes
app.use('/api/v1/transactions',transactionsRoute)

//routes
app.get('/',(req,res)=>{
    res.send('welcome home')
    res.end()
})
  

PORT=9000

app.listen(PORT,console.log('Server is listening'))