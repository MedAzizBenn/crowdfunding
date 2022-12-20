const mongoose = require('mongoose');

const NFTSchema = mongoose.Schema({
    address:{
        type: String,
        required: true,
        unique :true,
    },
    metadata : {
        type: String,
        required: true,
    },
    type: String,
    donator : {
        type: mongoose.Types.ObjectId,
        ref: 'Donator',
        required: true,
    },
});
module.exports = mongoose.model("NFT",NFTSchema);