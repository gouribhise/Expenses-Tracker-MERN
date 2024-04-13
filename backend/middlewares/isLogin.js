const { AppErr } = require("../utils/appErr")
const getTokenFromHeader = require("../utils/getTokenFromHeader")
const verifyToken = require("../utils/verifyToken")


const isLogin=(req,res,next)=>{
//get token from header
const token=getTokenFromHeader(req)
const decodedUser=verifyToken(token)
//save user
req.user=decodedUser.id
if(!decodedUser){
    return next(new AppErr('Invalid or expired token, please login again',401))
}
next()
}

module.exports=isLogin