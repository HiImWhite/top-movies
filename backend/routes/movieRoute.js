const express = require('express');
const router = express.Router();
const {
  start,
  getAllMovies,
  postMovie,
  editMovie,
} = require('../controllers/movieController');

router.get('/', start);
router.get('/movies', getAllMovies);
router.post('/movies', postMovie);
router.put('/movies/:id', editMovie);

module.exports = router;
