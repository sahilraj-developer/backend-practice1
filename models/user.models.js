const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        requires:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        requires:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        requires:true,
        trim:true,
        unique:true
    }
})


const User = mongoose.model("User",userSchema);
module.exports = User;