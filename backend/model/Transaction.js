const mongoose=require('mongoose')

const transactionSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    transactionType:{
        type:String,
        enum:["income","expenses"],
        required:true,
    },
    amount:{
        type:Number,
        required:true
    },
     
    category:{
        type:String,
        enum:["food","transportation","entertainment","shopping"],
        required:true,
    },
        
   color:{
    type:String,
   },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    date:{
        type:Date,
        default:Date.now()
    },
    notes:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    toJSON:{virtuals:true}
})


//compile schema to form model
const Transaction=mongoose.model('Transaction',transactionSchema)

module.exports=Transaction

