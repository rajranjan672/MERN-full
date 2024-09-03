const mongoose = require('mongoose');
const {Schema} = mongoose;
const jwt = require("jsonwebtoken")
const JWT_SECRET='ultrockwillrock#'

const UserSchema = new Schema({
    name:{
        type:String,
    },
    username:{
        type:String,
    },
    email:{
        type:String,
        unique:true

    },
    password:{
        type:String,
        
        
    },
    repeatpassword:{
        type:String,
        
    },
    
})


const User=mongoose.model('user',UserSchema);
// same email will not enter  again
module.exports=User
