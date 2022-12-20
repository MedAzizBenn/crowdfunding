const mongoose = require('mongoose');
var aes256 = require('aes256');
require('dotenv').config();
const InvesotrsSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    logo: Buffer,
    category: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "investCat",
        required: true,
    },
    investorsList: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "AgentInvestor",
        require: true,
    },
    walletPubkey: String,
    walletPrivKey: String,

});
InvesotrsSchema.methods.setWallet = function(walletPrivKey){

    var encryptedPrivKey = aes256.encrypt(process.env.KEY, walletPrivKey);
    this.walletPrivKey = encryptedPrivKey;
};
InvesotrsSchema.methods.getWallet = function(){
    return aes256.decrypt(process.env.KEY, this.walletPrivKey);
};


module.exports = Investors = mongoose.model('Investors',InvesotrsSchema);