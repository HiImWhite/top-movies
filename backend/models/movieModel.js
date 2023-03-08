const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  rank: String,
  name: String,
  year: Number,
  rating: String,
  genre: String,
  certificate: String,
  run_time: String,
  tagline: String,
  budget: String,
  box_office: String,
  casts: String,
  directors: String,
  writers: String,
});

module.exports = mongoose.model("Movie", movieSchema);
