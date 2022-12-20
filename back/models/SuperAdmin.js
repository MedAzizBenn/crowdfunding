const mongoose = require("mongoose");
const User = require('./User');
// const options = { discriminatorKey: 'itemtype' };

const  SuperAdminSchema =  new mongoose.Schema( {
    address: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    
});

var SuperAdmin = User.discriminator("SuperAdmin",SuperAdminSchema);

module.exports =SuperAdmin = mongoose.model('SuperAdmin');
