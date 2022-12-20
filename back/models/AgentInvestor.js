const mongoose = require('mongoose');
const User = require('./User');
var crypto = require('crypto');

const AgentInvestorSchema = new mongoose.Schema({
    position: {
        type: String,
        require: true,
    },
    telephone: String,
    investors: {
        type: mongoose.Types.ObjectId,
        ref: "Investors",
    },
    walletPubKey: String,
    walletSalt: String, 
    walletHash: String,

});

AgentInvestorSchema.methods.setWallet = function(wallet){
    this.walletSalt = crypto.randomBytes(16).toString(`hex`);
    this.walletHash = crypto.pbkdf2Sync(wallet,this.walletSalt,1000,64,`sha512`).toString(`hex`);
 };
 AgentInvestorSchema.methods.validWallet = function(wallet){
    var walletHash = crypto.pbkdf2Sync(wallet,  
        this.walletSalt, 1000, 64, `sha512`).toString(`hex`); 
        return this.walletHash === walletHash; 
 };
var AgentInvestor = User.discriminator("AgentInvestor",AgentInvestorSchema);
module.exports = AgentInvestor = mongoose.model('AgentInvestor');