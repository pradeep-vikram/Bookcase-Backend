const express = require('express')
const router = express.Router();

// Load user model
const User = require('../../models/user')

router.get('/', async (req,res)=>{
    await User.findOne({email:global.userid},'book',(err,details)=> {
        if(err){
            console.log(err)
        }
        res.json(details.book)
        // console.log(details.book)
    })
    .clone()
})


module.exports = router