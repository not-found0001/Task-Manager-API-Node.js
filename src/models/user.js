const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error('Email Is Invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(val){
            if(val < 0){
                throw new Error ('Age Must Be A Posotive Number')
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 7,
        validate(val){
            if(val.toLowerCase().includes('password')){
                throw new Error("password Does Not Contain'password'.")
            }
        }
    }
})

module.exports = User
