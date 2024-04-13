//register
const registerUserCtrl=async(req,res)=>{
    try{
res.json({msg:'register user'})
    }catch(error){
res.json(error)
    }
}

//login
const userLoginCtrl=async(req,res)=>{
    try{
res.json({msg:'login route'})
    }catch(error){
        res.json(error)
    }
}

//profile
const userProfileCtrl=async(req,res)=>{
    try{
res.json({msg:'profile route'})
    }catch(error){
        res.json(error)
    }
}

//delete
const deleteUserCtrl=async(req,res)=>{
    try{
res.json({msg:'Delete route'})
    }catch(error){
        res.json(error)
    }
}

const updateUserCtrl=async(req,res)=>{
    try{
res.json({msg:'Update route'})
    }catch(error){
        res.json(error)
    }
}
module.exports={
registerUserCtrl,
userLoginCtrl,
userProfileCtrl,
deleteUserCtrl,
updateUserCtrl
}