const mongoose = require('mongoose');
const User = require('./User');

const agentSchema = new mongoose.Schema ({

    address : {
        type : String,
        required : true
    },

    gouvernorat : {
        type : String,
        required : true
    },

    city : {
        type : String,
        required : true
    },

    position : {
        type : String,
        required : true
    },

    telephone : {
        type : String,
        required : true
    }
});

var Agent = User.discriminator("Agent",agentSchema);

module.exports=  Agent = mongoose.model('Agent');
