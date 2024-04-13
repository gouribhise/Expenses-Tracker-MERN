const mongoose=require('mongoose')

const dbConnect=async()=>{
    try{
await mongoose.connect(process.env.MONGO_URI)
console.log('db connected successfully')
    }catch(error){
console.log(error)
process.exit(1)
    }
}

dbConnect()