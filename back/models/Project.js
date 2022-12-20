const mongoose = require('mongoose');
const ProjectShema  = new mongoose.Schema({

    titre : {
        type: String,
        required: true,
        unique: true,
    },
    porteur: 
    {
        type: mongoose.Schema.Types.ObjectId, ref: "PorteurProject"
    },
   
    description: String,
    photo: {
        type: Buffer
    },
        
    maxcap : Number,

    currentAmount:Number,
    
    delay: Date,
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: "categoryproject"
    }
});

module.exports = Project = mongoose.model('Project',ProjectShema);