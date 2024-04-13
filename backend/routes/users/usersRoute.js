const express=require('express')
const { registerUserCtrl,   userLoginCtrl, userProfileCtrl, deleteUserCtrl, updateUserCtrl } = require('../../controllers/users/usersCtrl')
const usersRoute=express.Router()

//post/api/v1/users/register
usersRoute.post('/register',registerUserCtrl)

//post/api/v1/users/login
usersRoute.post('/login',userLoginCtrl)

//get/api/v1/users/profile/:id
usersRoute.get('/profile/:id',userProfileCtrl)


//delete/api/v1/users/:id
usersRoute.delete('/:id',deleteUserCtrl)

//update/api/v1/users/:id
usersRoute.put('/:id',updateUserCtrl)


module.exports=usersRoute