const mongoose = require("mongoose");
var crypto = require('crypto');

const User = require('./User');
// const options = { discriminatorKey: 'itemtype' };

const  PorteurProjectSchema =  new mongoose.Schema( {
   address: String,
   gouvernorat : String,
   city: String,
   walletPubKy: String,
   walletSalt: String,
   walletHash: String,
   telephone: String,
});

PorteurProjectSchema.methods.setWallet = function(wallet){
   this.walletSalt = crypto.randomBytes(16).toString(`hex`);
   this.walletHash = crypto.pbkdf2Sync(wallet,this.walletSalt,1000,64,`sha512`).toString(`hex`);
};
PorteurProjectSchema.methods.validWallet = function(wallet){
   var walletHash = crypto.pbkdf2Sync(wallet,  
       this.walletSalt, 1000, 64, `sha512`).toString(`hex`); 
       return this.walletHash === walletHash; 
};


var PorteurProject = User.discriminator("PorteurProject",PorteurProjectSchema);

module.exports =PorteurProject = mongoose.model('PorteurProject');