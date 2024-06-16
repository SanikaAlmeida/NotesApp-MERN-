const {addnote,deletenote,updatenote,getnotes,changepin,searchnotes}= require('../controller/note')
const authenticatetoken=require('../middleware/authenticate')
const express = require('express')
const router = express.Router()

router.post('/addnote',authenticatetoken,addnote)
router.delete('/deletenote/:id',authenticatetoken,deletenote)
router.patch('/updatenote/:id',authenticatetoken,updatenote)
router.patch('/changepin/:id',authenticatetoken,changepin)
router.get('/getnotes',authenticatetoken,getnotes)
router.get('/search',authenticatetoken,searchnotes)

module.exports = router 