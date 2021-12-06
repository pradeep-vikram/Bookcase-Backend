const express = require('express')
const router = express.Router();

// const login = require('../../models/Book');

router.post('/login', (req,res)=>{
    console.log(req.body)
})

module.exports = router