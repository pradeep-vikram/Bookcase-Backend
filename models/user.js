const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Can't be blank"]
    },
    email:{
        type:String,
        required:[true,"Can't be blank"],
        index:true
    },
    password:{
        type:String,
        required:[true,"Can't be blank"]
    },
    book : [{
        title:{
            type:String
        },
        isbn: {
            type: String
        },
        author: {
            type: String
        },
        description: {
            type: String
        },
        published_date: {
            type: Date
        },
        publisher: {
            type: String
        },
        updated_date: {
            type: Date,
            default: Date.now
        },
        readtype:{
            type:String
        }
    }]
},{timestamps: true})

userSchema.plugin(uniqueValidator, {message: 'Already taken.'});

module.exports = User = mongoose.model('user', userSchema)