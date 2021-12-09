const express = require('express')
const router = express.Router();

// Load user model
const User = require('../../models/user')


router.post('/', async (req,res)=>{
    console.log(req.body)
})


module.exports = router