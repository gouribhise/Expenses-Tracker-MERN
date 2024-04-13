const createAccountCtrl=('/',async(req,res)=>{
    try{
res.json({msg:'create account route'})
    }catch(error){
        res.json(error)
    }
}) 
const getAccountsCtrl=('/',async(req,res)=>{
    try{
res.json({msg:'get all accounts route'})
    }catch(error){
        res.json(error)
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