const mongoose = require('mongoose');
const DonationSchema = new  mongoose.Schema ({
    donator : {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donator",
        require: true,
    },
    project : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    montant : {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default : Date.now(),
    },

});

module.exports = Donation = mongoose.model("donation",DonationSchema );