const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"],
    },
    movieLength: {
        type: Number,
        min: [20, "Movie should not be less than 20 Minutes"],
        max: [180, "Movie should not be greater than 180 Minutes"]
    },
    minAge: {
        type: Number,
        min: [3, "Age under 3 not allowed"]
    },
    maxAge: {
        type: Number,
        max: [90, "Age over 90 not allowed"]
    },
    category: String,
});

const moviesModel = mongoose.model('movies', movieSchema);

module.exports = moviesModel;