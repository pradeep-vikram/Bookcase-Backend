const express = require('express')
const router = express.Router();

// Load user model
const User = require('../../models/user')


router.post('/login', async (req,res)=>{
    var {email,password} = req.body
    console.log(email,password)
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


module.exports = router