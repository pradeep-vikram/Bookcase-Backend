const express = require('express')
const router = express.Router();

// Load user model
const User = require('../../models/user')

// Load userid variable
// const usermodule = require('./login')
// const userid = usermodule.userid;

router.post('/', async (req,res)=>{
    console.log(req.body)
    console.log(global.userid)
    let update = {"title":req.body.title,
                    "isbn":req.body.isbn,
                    "author":req.body.author,
                    "description":req.body.description,
                    "publisher":req.body.publisher,
                    "updated_date":req.body.date,
                    "readtype":req.body.readtype}
    // let detail = User.findOneAndUpdate({email:global.userid},req.body)
    
    let doc = User.findOneAndUpdate({email:global.userid}, {$push: {"book" : update}}, {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
        res.json({msg:"Success"})
        console.log(doc);
    })
    // await detail.save()
    // console.log(detail)
})


module.exports = router