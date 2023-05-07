const express = require('express');
const {
    getMovies, 
    getMoviesId,
    getMoviesTitle,
    getMoviesGenre,
    getMoviesYear2010,
    // --------------------
    postMovies, 
    putMovies, 
    deleteMovies, 
    } = require('../controller/movie.controller');

const router = express.Router();

router.get('/', getMovies);
router.get('/id/:id', getMoviesId);
router.get('/title/:title', getMoviesTitle);
router.get('/genre/:genre', getMoviesGenre);
router.get('/year2010/', getMoviesYear2010);
// -----------------------------------------
router.post('/', postMovies);
router.put('/:id', putMovies);
router.delete('/:id', deleteMovies);



module.exports = router;