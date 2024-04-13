const createTransactionCtrl=('/',async(req,res)=>{
    try{
res.json({msg:'create transaction route'})
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