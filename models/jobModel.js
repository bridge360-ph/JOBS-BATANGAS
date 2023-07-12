const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Job title is required'],
        maxlength: 70,
    },

    description: {
        type: String,
        trim: true,
        required: [true, 'Job description is required'],
    },

    qualification: {
        type: String,
        trim: true,
        required: [true, 'Qualification is required'],
    },

    salary: {
        type: String,
        trim: true,
        required: [true, 'Salary is required']
    },

    location: {
        type: String,
    },

    available: {
        type: Boolean,
        default: true
    },

    jobType: {
        type: ObjectId,
        ref: "JobType", 
        required: true
    },

    user: {
        type: ObjectId,
        ref: "User", 
        required: true
    },

  
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);