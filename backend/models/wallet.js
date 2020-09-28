const mongoose = require('mongoose')
const WalletSchema = new mongoose.Schema({
    walletId: { 
        type:String, 
        required:true },
    content: { 
        type:Object,
        required:true,
     },
    createdAt:{
        type: Date,
        default: Date.now},
}) 

module.exports = mongoose.model('Wallet',WalletSchema)