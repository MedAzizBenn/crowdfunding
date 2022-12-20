const mongoose = require("mongoose");
var crypto = require('crypto');
const options = { discriminatorKey: 'itemtype' };

const UserSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    hash: String,
    salt: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
},options);

UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString(`hex`);
    this.hash = crypto.pbkdf2Sync(password,this.salt,1000,64,`sha512`).toString(`hex`);
};
UserSchema.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password,  
        this.salt, 1000, 64, `sha512`).toString(`hex`); 
        return this.hash === hash; 
};

module.exports = User = mongoose.model("user", UserSchema);
