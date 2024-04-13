require("dotenv").config();
const express=require('express')
require('./config/dbConnect')
const usersRoute = require('./routes/users/usersRoute')
const accountRoute = require('./routes/accounts/accountRoute')
const transactionsRoute=require('./routes/transactions/transactionsRoute')
const app=express()

//middleware
app.use(express.json())
app.use(express.urlencoded())

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

//users routes
 

 

 


//account route
app.post('/api/v1/accounts',)

app.get('/api/v1/accounts',async(req,res)=>{
    try{
res.json({msg:'get all accounts route'})
    }catch(error){
        res.json(error)
    }
})

app.get('/api/v1/accounts/:id',async(req,res)=>{
    try{
res.json({msg:'get single account route'})
    }catch(error){
        res.json(error)
    }
})

app.delete('/api/v1/accounts/:id',async(req,res)=>{
    try{
res.json({msg:'delete   account route'})
    }catch(error){
        res.json(error)
    }
})

app.put('/api/v1/accounts/:id',async(req,res)=>{
    try{
res.json({msg:'update single account route'})
    }catch(error){
        res.json(error)
    }
})

 

 
 

 
//error handlers
PORT=9000

app.listen(PORT,console.log('Server is listening'))