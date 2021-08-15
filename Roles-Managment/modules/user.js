const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    mail:{
        type:String,
        trim:true
    },
    password:{
        type:String,
    },
    tokens:[{
        token:{
            type:String
        }
    }],
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Roles',
        required:true
    }

})

const User = mongoose.model('User',userSchema)

module.exports = User