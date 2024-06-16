const {register,log,deleteuser,updateuser,getusers}= require('../controller/user')
const authenticatetoken=require('../middleware/authenticate')
const express = require('express')
const router = express.Router()

router.post('/signup',register)
router.post('/login',log)
router.delete('/deleteuser',authenticatetoken,deleteuser)
router.patch('/updateuser',authenticatetoken,updateuser)
router.get('/getuser',authenticatetoken,getusers)

module.exports = router 