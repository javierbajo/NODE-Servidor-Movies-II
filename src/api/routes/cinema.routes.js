const express = require('express');
const {
    getAllCinemas, 
    getCinemasId,
    getCinemasName,
    // -------------
    postCinemas, 
    putCinemas, 
    deleteCinemas, 
    // -------------
    getAddMovieToCinema,
    } = require('../controller/cinema.controller');

const router = express.Router();

router.get('/', getAllCinemas);
router.get('/id/:id', getCinemasId);
router.get('/name/:name', getCinemasName);
// ----------------------------------------
router.post('/', postCinemas);
router.put('/:id', putCinemas);
router.delete('/:id', deleteCinemas);
// ----------------------------------------
router.get('/addmovie', getAddMovieToCinema);



module.exports = router;