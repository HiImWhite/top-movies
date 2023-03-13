const express = require("express");
const router = express.Router();
const {
  start,
  getAllMovies,
  postMovie,
  editMovie,
} = require("../controllers/movieController");
const { getAverageBoxOfficePerDirector } = require("../controllers/movieStats");

router.get("/", start);
router.get("/movies", getAllMovies);
router.post("/movies", postMovie);
router.put("/movies/:id", editMovie);
router.get("/stats/avgbox", getAverageBoxOfficePerDirector);

module.exports = router;
