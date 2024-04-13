const mongoose=require('mongoose')

const accountSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:["savings","investment","checking","credit card","Builing","School","project"],
        required:true,
    },
    initialBalance:{
        type:Number,
        default:0
    },
     
    transactions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Transaction'
    }
        
    ],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
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
const Account=mongoose.model('Account',accountSchema)

module.exports=Account

