const express = require('express')
const router = express.Router();

// Load user model
const User = require('../../models/user')

// var userid = ""

router.post('/login', async (req,res)=>{
    var {email,password} = req.body
    // console.log(email,password)
    // var user = new User({
    //     name:"Pradeep Vikram",
    //     email:email,
    //     password:password
    // })
    // user.save();
    var user = await User.findOne({email})
    .then(user => {
        if(user){
            if((password === user.password)){
                res.json({msg:"Success"})
                global.userid = email;
                
            }
            else{
                res.json({msg:"Invalid Password"})    
            }
        }
        else{
            res.json({msg:"Invalid User"})
        }
        
    })
})

router.post('/register',async (req,res)=>{
    var {name,email,password} = req.body
    var user = await User.create({
        name:name,
        email:email,
        password:password
    })
    .then(user => {
        if(user){
            res.json({msg:"Success"})
        }
        else{
            res.json({msg:"Unsuccessful"})
        }
        
    })
})


module.exports = router
// exports.userid = userid;