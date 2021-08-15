const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
    role:{
        type:String,
        required:true,
        unique:true,
        trim:true
    }
})

const Roles = mongoose.model('Roles',roleSchema);
module.exports = Roles