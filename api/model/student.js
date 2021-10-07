const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    fname:String,
    lname:String,
    roll_no:String,
    age:Number,
    study:String
})

module.exports = mongoose.model('Student', studentSchema)