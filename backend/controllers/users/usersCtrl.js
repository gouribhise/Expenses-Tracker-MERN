const bcrypt=require('bcryptjs')
const User = require("../../model/User")


//register
const registerUserCtrl=async(req,res)=>{
    const{fullname,email,password}=req.body
    try{
        //check if email exists
        const userFound=await User.findOne({email})
        if(userFound){
            return res.json({message:'user exists'})
        }

        if(!fullname||!password||!email){
            return res.json({message:'Please provide all fileds'})
        }
        //check if empty data
        //hash user password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        //create user
        const user=await User.create({
            fullname,
            email,
            password:hashedPassword
        })
        res.json({status:'success',fullname:user.fullname,
    id:user._id,
email:user.email}) 
    }catch(error){
res.json(error)
    }
}

//login
const userLoginCtrl=async(req,res)=>{
    const{email,password}=req.body
    try{
        //if email exists
        const userFound=await User.findOne({email})
        if(!userFound){
            return res.json({message:'Invalid login credentials'})
        }

        //is password valid
        const isPasswordMatch=await bcrypt.compare(password,userFound.password)
        if(!isPasswordMatch){
            return res.json({message:'Invalid login credentials'})

        }

res.json({status:'success',fullname:userFound.fullname,id:userFound._id})
 
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