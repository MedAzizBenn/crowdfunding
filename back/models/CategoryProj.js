const mongoose = require('mongoose');

const CategoryProjSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
});

module.exports = CategoryProj = mongoose.model("categoryproject",CategoryProjSchema );