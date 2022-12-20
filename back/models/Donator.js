const mongoose = require('mongoose');
var aes256 = require('aes256');
const User= require('./User');

const DonatorSchema = mongoose.Schema({
    walletPubKey: {
        type: String,
        required: true,
        unique: true,
    },
    walletPrivKey:String,
    profilePic:String,
    coverPic: String,
    gouvernorat: String,
    zipCode: String,
    city: String,
    profession: String,
    telephone: String,
    company: String,
    description: String,
    gouvernorat: String

});
DonatorSchema.methods.setWallet = function(wallet){
    var encryptedPrivKey = aes256.encrypt(process.env.KEY, wallet);
    this.walletPrivKey = encryptedPrivKey;
 };
 DonatorSchema.methods.validWallet = function(wallet){
    return wallet === aes256.decrypt(process.env.KEY, this.walletPrivKey);

 };
 DonatorSchema.methods.getWallet = function(){
    return aes256.decrypt(process.env.KEY, this.walletPrivKey);
 }
 
 var Donator = User.discriminator("Donator",DonatorSchema);
 module.exports = Donator = mongoose.model("Donator");