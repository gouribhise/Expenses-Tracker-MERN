const globalHandler=(err,req,res,next)=>{
    //message
    //status
    //statusCode
    //stack
const statusCode=err.statuscode=err.statuscode||500
const status=err.status=err.status||'error'
const message=err.message
const stack=err.stack
res.status(statusCode).json({
    status,
    message,
    stack
})
}

module.exports=globalHandler