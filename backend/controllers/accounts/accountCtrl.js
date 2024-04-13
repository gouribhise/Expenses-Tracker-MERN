const Account=require('../../model/Account')
const User=require('../../model/User')
const {AppErr}=require('../../utils/appErr')
const createAccountCtrl=('/',async(req,res,next)=>{
    const{name,initialBalance,accountType,notes}=req.body
    try{
        //find the logged in user
        const userFound=await User.findById(req.user)
        if(!userFound){
            return next(new AppErr('User not found',404))
        }
        //create the account
        const account=await Account.create({
            name,initialBalance,accountType,notes,
            createdBy:req.user
        })

        //push account in users accounts field
        userFound.accounts.push(account._id)
        //save
        await userFound.save()
res.json({
    status:'success',
    data:account
})
    }catch(error){
        next(error)
    }
}) 
const getAccountsCtrl=('/',async(req,res)=>{
    try{
        const accounts=await Account.find().populate("transactions")
res.json( accounts)
    }catch(error){
         next(error)
    }
})

const getAccountCtrl=('/:id',async(req,res)=>{
    try{
res.json({msg:'get single accounts route'})
    }catch(error){
        res.json(error)
    }
})

  const deleteAccountCtrl=('/:id',async(req,res)=>{
    try{
res.json({msg:'delete single account route'})
    }catch(error){
        res.json(error)
    }
})

  const updateAccountCtrl=('/:id',async(req,res)=>{
    try{
res.json({msg:'update single account route'})
    }catch(error){
        res.json(error)
    }
})

module.exports={
    createAccountCtrl,
    getAccountCtrl,
    getAccountsCtrl,
    deleteAccountCtrl,
    updateAccountCtrl
}