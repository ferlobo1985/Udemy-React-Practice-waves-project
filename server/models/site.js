const mongoose = require('mongoose');

const siteSchema = mongoose.Schema({
    address:{
        required:true,
        type:String
    },
    hours:{
        required:true,
        type:String
    },
    phone:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    }
});


const Site = mongoose.model('Site',siteSchema);
module.exports = { Site }