const mongoose = require('mongoose');

const categoryInvestorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
});

module.exports = categoryInvestors = mongoose.model("categoryInvestors",categoryInvestorsSchema);