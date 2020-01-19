const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         lowercase: true,
//         trim: true,
//         validate(val){
//             if(!validator.isEmail(val)){
//                 throw new Error('Email Is Invalid')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(val){
//             if(val < 0){
//                 throw new Error ('Age Must Be A Posotive Number')
//             }
//         }
//     },
//     password: {
//         type: String,
//         trim: true,
//         required: true,
//         minlength: 7,
//         validate(val){
//             if(val.toLowerCase().includes('password')){
//                 throw new Error("password Does Not Contain'password'.")
//             }
//         }
//     }
// })

// const user = new User({
//     name: 'MK   ',
//     email: 'MYEMAIL@mead.IO       ',
//     age: 23,
//     password: '   pass'
// })

// user.save().then(() => {
//     console.log(user)
// }).catch((error) => {
//     console.log(error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true, 
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

new Task({
    description: 'Learning Mongoose Library',
    completed: true
}).save().then((task) => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})