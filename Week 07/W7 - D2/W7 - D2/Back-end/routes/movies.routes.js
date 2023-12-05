const express = require('express');
const router = express.Router();
const movieController = require('../controllers/Movies.controller');

router.get('/movies', movieController.getMovies);
router.post('/movie', movieController.addMovie);
router.put('/movie/:id', movieController.updateMovie);
router.delete('/movie/:id', movieController.deleteMovie);

module.exports = router;
