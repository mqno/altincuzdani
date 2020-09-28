const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    id: { type:String, 
        required:true },
    email:{
        type: String,
        required :true
    },
    userName:{
        type: String,
        required :true
    },
    password:{
        type: String,
        required :true
    },
 
    createdAt:{
        type: Date,
        default: Date.now},
    walletId:{
        type:String,
            required:false
    }

}) 

module.exports = mongoose.model('User',UserSchema)