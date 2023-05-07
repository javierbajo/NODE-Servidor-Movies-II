const express = require('express');
const {
    getCinemas, 
    getCinemasId,
    getCinemasName,
    // -------------
    postCinemas, 
    putCinemas, 
    deleteCinemas, 
    } = require('../controller/cinema.controller');

const router = express.Router();

router.get('/', getCinemas);
router.get('/id/:id', getCinemasId);
router.get('/name/:name', getCinemasName);
// ----------------------------------------
router.post('/', postCinemas);
router.put('/:id', putCinemas);
router.delete('/:id', deleteCinemas);



module.exports = router;