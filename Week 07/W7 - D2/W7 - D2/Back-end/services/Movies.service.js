const moviesModel = require('../models/movies.model');

async function getMovies() {
    return await moviesModel.find();
}

async function addMovie(data) {
    return await moviesModel.create(data);
}

async function updateMovie(id, updateData) {
    const movie = await moviesModel.findByIdAndUpdate(id, updateData);
    if (!movie) {
        throw new Error('Movie not found');
    }
    return movie;
}

async function deleteMovie(id) {
    const movie = await moviesModel.findByIdAndDelete(id);
    if (!movie) {
        throw new Error('Movie not found');
    }
    return 'Movie deleted successfully';
}

module.exports = {
    getMovies,
    addMovie,
    updateMovie,
    deleteMovie,
};
