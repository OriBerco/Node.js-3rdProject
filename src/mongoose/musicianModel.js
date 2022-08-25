const mongoose = require('mongoose');

const musicianScheme = mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    isActiveMusician:Boolean,
    createDate:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('musician',musicianScheme);