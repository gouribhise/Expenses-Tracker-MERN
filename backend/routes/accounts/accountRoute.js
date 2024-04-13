const express=require('express')
const { createAccountCtrl, getAccountCtrl, getAccountsCtrl, deleteAccountCtrl, updateAccountCtrl } = require('../../controllers/accounts/accountCtrl')
const accountRoute=express.Router()

accountRoute.post('/',createAccountCtrl)

accountRoute.get('/:id',getAccountCtrl)

accountRoute.get('/',getAccountsCtrl)

accountRoute.delete('/:id',deleteAccountCtrl)

accountRoute.put('/:id',updateAccountCtrl)
module.exports=accountRoute