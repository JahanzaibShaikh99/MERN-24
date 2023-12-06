const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"],
        minLength: [5, "Length should not be under 5"],
        maxLength: [20, "Length should not be more than 20"]
    },
    password: {
        type:String,
        
    },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User'
    },
    balance: {
        type: Number,
        default: 0
    },
    age: {
        type: Number,
        required: [true, "Please enter the age"],
        min: [3, "Age under 3 not allowed"],
        max: [90, "Age over 90 not allowed"]
    },

    password: {
        type: String,
        required: [true, "Please enter the Password"],
        min: [5, "Password under 5 not allowed"],
        max: [16, "Password over 16 not allowed"],
        select: false
    },
    city: String,
});

const personModel = mongoose.model('person', personSchema);

module.exports = personModel;