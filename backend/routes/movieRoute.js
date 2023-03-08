const express = require("express");
const router = express.Router();
const {
  start,
  getAllMovies,
  postMovie,
} = require("../controllers/movieController");

router.get("/", start);
router.get("/movies", getAllMovies);
router.post("/movies", postMovie);

module.exports = router;
