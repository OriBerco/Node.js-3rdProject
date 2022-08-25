const mongoose = require('mongoose');

const instrumentScheme = mongoose.Schema({
    name:String,
    descrpition:String,
    model:String,
    manufacturer:String,
    manufacturingyear:String,
    instrumentimage:String,
    userId:String

})

module.exports = mongoose.model('instrument', instrumentScheme);