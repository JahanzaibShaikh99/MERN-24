const productService = require("../services/Product.service");

async function getMovies(req, res) {
  try {
    const movies = await movieService.getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error getting movies", error: error.message });
  }
}

async function addMovie(req, res) {
  const movieData = req.body;
  try {
    const newMovie = await movieService.addMovie(movieData);
    res
      .status(201)
      .json({ message: "Successfully added movie", movie: newMovie });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding movie", error: error.message });
  }
}

async function updateMovie(req, res) {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedMovie = await movieService.updateMovie(id, updateData);
    res
      .status(200)
      .json({ message: "Successfully updated movie", movie: updatedMovie });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating movie", error: error.message });
  }
}

async function deleteMovie(req, res) {
  const { id } = req.params;
  try {
    const deleteMessage = await movieService.deleteMovie(id);
    res.status(200).json({ message: deleteMessage });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting movie", error: error.message });
  }
}

module.exports = {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
};
