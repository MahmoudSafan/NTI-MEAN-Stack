const mongoose = require("mongoose");

const routeSchema = mongoose.Schema({
    url:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },
    roles:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Roles',
        required:true,
        trim:true
    }]
})

const Routes = mongoose.model('Routes',routeSchema);
module.exports = Routes