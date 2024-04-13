const Account=require('../../model/Account')
const User=require('../../model/User')
const Transaction=require('../../model/Transaction')
const {AppErr}=require('../../utils/appErr')

const createTransactionCtrl=('/',async(req,res,next)=>{
    const{name,amount, notes,transactionType,account,category}=req.body
    try{
        //find user
        const userFound=await User.findById(req.user)
        if(!userFound){
            return next(new AppErr('User not found',404))
        }
        //find the account
        const accountFound=await Account.findById(account)
        if(!accountFound){
            return next(new AppErr('Account not found',404))

        }
        //create the transation
        const transaction=await Transaction.create({
            amount, notes,account,transactionType,category,name,createdBy:req.user
        })
        //push the transaction to the account
        accountFound.transactions.push(transaction._id)
        //resave the account
        await accountFound.save()
res.json( {
    status:'success',
    data:transaction
})
    }catch(error){
        res.json(error)
    }
})

const getTransactionsCtrl=('/',async(req,res)=>{
    try{
res.json({msg:'get all transactions route'})
    }catch(error){
        res.json(error)
    }
})


const getTransactionCtrl=('/:id',async(req,res)=>{
    try{
res.json({msg:'get single transaction route'})
    }catch(error){
        res.json(error)
    }
})

const deleteTransactionCtrl=('/:id',async(req,res)=>{
    try{
res.json({msg:'delete single transaction route'})
    }catch(error){
        res.json(error)
    }
})


const updateTransactionCtrl=('/:id',async(req,res)=>{
    try{
res.json({msg:'update single transaction route'})
    }catch(error){
        res.json(error)
    }
})

module.exports={
    createTransactionCtrl,
    getTransactionsCtrl,
    getTransactionCtrl,
    deleteTransactionCtrl,
    updateTransactionCtrl,
}