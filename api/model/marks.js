const mongoose = require('mongoose')

const marksSchema = new mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId, 
    // studentId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Student',
    //     required: true,
    // },
    fname : {
        type:String,
        ref:'Student'
    },
    english: {
        type: Number,
        required: true
    },
    math: {
        type: Number,
        required: true
    },
    science: {
        type: Number,
        required: true
    },   
})

module.exports = mongoose.model('Student_Marks',marksSchema)