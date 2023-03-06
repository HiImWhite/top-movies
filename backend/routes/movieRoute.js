const express = require('express');
const router = express.Router();
const { start, getAllMovies } = require('../controllers/movieController');

router.get('/', start);
router.get('/movies', getAllMovies);

module.exports = router;
